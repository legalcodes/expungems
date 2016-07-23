var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/expungems';

function handleError(err, done, res) {
	done();
	console.log(err);
	return res.status(500).json({success: false, data: err});
};


// READ

router.get('/api/v1/expungems', function(req, res){

		var results = [];

		// Get Postgres client from connection pool
		pg.connect(connectionString, function(err, client, done){
			if(err) {return handleError(err, done, res);}

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

// CREATE

router.post('/api/v1/expungems', function(req, res) {

    var results = [];

    // Grab data from http request
    var data = {title: req.body.title, description: req.body.description};

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
			if(err) {return handleError(err, done, res);}

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

// UPDATE

router.put('/api/v1/expungems/:event_id', function(req, res) {
	var results = [];

	// Grab id from url params
	var id = req.params.event_id;

	// Grab data from http request
	var data = {title: req.body.title, description: req.body.description};

	console.log('DATA GRABBED FROM HTTP REQ: ////////////////// ', data);

	// Get a Postgres client from connection pool
	pg.connect(connectionString, function(err, client, done) {
		if(err) {return handleError(err, done, res);}

		// SQL Query > Update Data
		client.query("UPDATE events SET title=($1), description=($2) WHERE id=($3)", [data.title, data.description, id]);

		// SQL Query > Select Data
		var query = client.query("SELECT * FROM events ORDER BY id ASC");

		// Stream results back one row at a time
		query.on('row', function(row){
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
