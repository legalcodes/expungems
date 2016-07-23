var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var env = require('node-env-file');
var router = express.Router();
var pg = require('pg');
var routes = require('./server/routes/index');
require('./webpack.config.js');

console.log('Routes: ', routes);

var app = express();

var port = process.env.PORT;

var static_path = path.join(__dirname, 'dist');

app.use(bodyParser());

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

app.use(routes);
