var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/expungems';

var client = new pg.Client(connectionString);

client.connect();

var query = client.query('CREATE TABLE events(id SERIAL PRIMARY KEY, title VARCHAR(40) not null, date VARCHAR(40) not null, time VARCHAR(40) not null, address VARCHAR(40) not null, admission VARCHAR(40) not null, misc VARCHAR(40) not null)');

query.on('end', function() { client.end(); });



// title
// date
// time
// address
// admission
// misc
