var through2 = require('through2');
var hyperquest = require('hyperquest');
var bl = require('bl');
var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');

// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

function rndport() {
    return 1024 + Math.floor(Math.random() * 64511);
}

function shopping() {
    var things = ['牛乳', 'パン', '人参', 'MacBook', '車'];
    return things[Math.floor(Math.random() * things.length)];
}

function startTime() {
    var times = ['13:00〜', '14:00〜', '15:00〜', '09:00〜', '23:00〜'];
    return times[Math.floor(Math.random() * times.length)];
}

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {

    this.submissionPort = rndport();
    this.solutionPort = this.submissionPort + 1;

    var thing = shopping();
    var time = startTime();

    this.submissionArgs = [this.submissionPort, thing, time];
    this.solutionArgs = [this.solutionPort, thing, time];

    process.nextTick(callback);
});

// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {

    this.submissionStdout.pipe(process.stdout);

    // replace stdout with our own streams
    this.submissionStdout = through2();
    if (mode == 'verify') {
        this.solutionStdout = through2();
    }

    setTimeout(query.bind(this, mode), 500);

    process.nextTick(function () {
        callback(null, true)
    });
});

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
    var exercise = this

    function verify (port, stream) {

        var url = 'http://localhost:' + port;

        function error (err) {
            exercise.emit('fail', 'Error connecting to http://localhost:' + port + ': ' + err.code)
        }

        hyperquest.get(url)
            .on('error', error)
            .pipe(bl(function (err, data) {

                if (err)
                    return stream.emit('error', err)

                stream.write(data.toString() + '\n');
                stream.end();
            }));
    }

    verify(this.submissionPort, this.submissionStdout)

    if (mode == 'verify') {
        verify(this.solutionPort, this.solutionStdout);
    }
}

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise;
