// import express from 'express';
// import path from 'path';
// import env from 'env';
// import './webpack.config.js';

var express = require('express');
var path = require('path');
var env = require('node-env-file');
var router = express.Router();
var pg = require('pg');
require('./webpack.config.js');

var connectionString = require(path.join(__dirname, '../', '../', 'config'));

var app = express();

var port = process.env.PORT;

var static_path = path.join(__dirname, 'dist');

app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path,
    });
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Listening at localhost:', process.env.PORT);
    }
  });

//////////////////////
/////DATABASE CRUD////
//////////////////////

router.post('api/v1/todos', function(req, res) {
	var results = [];

	// Grab data from http request
	var data = {
		title: req.body.title,
		description: req.body.description
	};

	// Get a Postgres client from the connection pool
	pg.connect(connectionString, function(err, client, done) {

		// Handle connection errors
		if(err) {
			done();
			console.log(err);
			return res.status(500).json({ success: false, data: err});
		}

			// SQL Query > Insert Data
		client.query("INSERT INTO events(title, description) values($1, $2)", [data.title, data.description]);
	});
});
