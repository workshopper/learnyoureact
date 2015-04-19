var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/', function(req, res) {
	res.render('index', '');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments.json', function(req, res) {
	fs.readFile('comments.json', function(err, data) {
	res.setHeader('Content-Type', 'application/json');
	res.send(data);
	});
});

app.post('/comments.json', function(req, res) {
	fs.readFile('comments.json', function(err, data) {
		var comments = JSON.parse(data);
		comments.push(req.body);
		fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
			res.setHeader('Content-Type', 'application/json');
			res.setHeader('Cache-Control', 'no-cache');
			res.send(JSON.stringify(comments));
		});
	});
});

app.listen(app.get('port'), function() {});

