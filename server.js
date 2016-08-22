var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var env = require('node-env-file');
var router = express.Router();
var pg = require('pg');
var routes = require('./server/routes/index');
require('./webpack.config.js');

var app = express();

var port = process.env.PORT;

var static_path = path.join(__dirname, 'dist');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/expungems';

app.use(bodyParser());

app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Listening at localhost:', process.env.PORT);
    }
  });

app.use(routes);

var client = new pg.Client(connectionString);

client.connect();

// run only if table does not already exist

// check if table exists


// var query = client.query('CREATE TABLE events(id SERIAL PRIMARY KEY, title VARCHAR(40) not null, date VARCHAR(40) not null, time VARCHAR(40) not null, address VARCHAR(40) not null, admission VARCHAR(40) not null, misc VARCHAR(40) not null)');

// query.on('end', function() { client.end(); });
