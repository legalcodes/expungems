import pg from 'pg';

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/expungems-events';

function query (sql, params, cb) {
  pg.connect(DATABASE_URL, function(err, client, done){
    if (err) {
      done(); // release client back to pool
      cb(err);
      return;
    }
    client.query(sql, params, cb);
  });
}

// returns event object if found, else returns undefined
exports.findEventId = function(id, cb) {
  var sql = `SELECT * FROM events WHERE id = $1`;

  query(sql, [id], function(err, result) {
    if(err) return cb(err);
    cb(null, result.rows[0]);
  });
};

// returns created event object

exports.insertEvent = function(data, cb) {
  var sql = `
    INSERT INTO events (eventname, description)
    VALUES ($1, $2)
    RETURNING * `; // tells postgres to return the created user record to us
};
