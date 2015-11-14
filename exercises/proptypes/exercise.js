var through2 = require('through2');
var hyperquest = require('hyperquest');
var bl = require('bl');
var exercise = require('workshopper-exercise')();
var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var path = require('path');
var fs = require('fs');
var beautify_html = require('js-beautify').html;

// the output will be long lines so make the comparison take that into account
exercise.longCompareOutput = true;

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);
exercise.getSolutionFiles = function (callback) {
    var solutionDir = path.join(this.dir, './solution');

    fs.readdir(solutionDir, function (err, list) {
        if (err) return callback(err);
        list.push("views/index.jsx");
        list = list
            .filter(function (f) {
                return (/\.js.*$/).test(f)
            })
            .map(function (f) {
                return path.join(solutionDir, f)
            });
        callback(null, list);
    });
}

function rndport() {
    return 1024 + Math.floor(Math.random() * 64511);
}

// set up the data file to be passed to the submission
exercise.addSetup(function (mode, callback) {

    this.submissionPort = rndport();
    this.solutionPort = this.submissionPort + 1;

    this.submissionArgs = [this.submissionPort];
    this.solutionArgs = [this.solutionPort];

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

    setTimeout(query.bind(this, mode), 3000);

    process.nextTick(function () {
        callback(null, true)
    });
});

// delayed for 3000ms to wait for servers to start so we can start
// playing with them
function query(mode) {
    var exercise = this;

    function verify(port, stream) {

        var url = 'http://localhost:' + port;

        function onData(err, _data) {
            if (err) {
                exercise.emit('fail', exercise.__('fail.connection', {address: url, message: err.message}));
            } else {
                var data = beautify_html(_data.toString(), null);
                stream.write(data);
            }

            stream.end();
        }

        var attempt = 0;
        var doRequest = function () {
            hyperquest.get(url).pipe(bl(function (err, data) {
                if (err !== null) {
                    attempt++;
                    if (attempt < 100) {
                        setTimeout(doRequest, 100);
                    } else {
                        hyperquest.get(url).pipe(bl(onData));
                    }
                } else {
                    hyperquest.get(url).pipe(bl(onData));
                }
            }));
        };

        return doRequest();

    }

    verify(this.submissionPort, this.submissionStdout);
    if (mode == 'verify')
        verify(this.solutionPort, this.solutionStdout);
}

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise;
