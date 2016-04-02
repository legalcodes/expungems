var express = require('express');
var path = require('path');
var env = require('node-env-file');


// var isDevelopment = (process.env.NODE_ENV !== 'production');

// var env = env(__dirname + '/env');
var app = express();

// app.use(bodyParser());

var port = process.env.PORT;

app.use(express.static(__dirname + './Assets'));

var static_path = path.join(__dirname, 'dist/');

app.use(express.static(static_path))
	.get('/', function (req, res) {
		res.sendFile('index.html', {
			root: static_path,
		});
	}).listen(process.env.PORT, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Listening at localhost:', process.env.PORT);
		}
	});



