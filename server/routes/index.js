var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/expungems';

router.post('/api/v1/expungems', function(req, res) {

    var results = [];

    // Grab data from http request
  	console.log('REQUEST FROM ROUTES INDEX JS', req.body);
    var data = {title: req.body.title, description: req.body.description};

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

        // SQL Query > Select Data
        var query = client.query("SELECT * FROM events ORDER BY id ASC");

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });


    });
});

module.exports = router;
