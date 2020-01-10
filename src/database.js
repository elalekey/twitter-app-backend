const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'bqtjoxbbuutesblnrguf-mysql.services.clever-cloud.com',
  user: 'uxpu9ock0fip5swt',
  password: 'G3UjGPgVdjlSaWY2tNaX',
  database: 'bqtjoxbbuutesblnrguf',
  port: 3306,
  URI: "mysql://uys8ndjmpjqjuerp:E2leRX7qGibtl8y1xSFz@bun1ndjxtuacgzctyaox-mysql.services.clever-cloud.com:3306/bun1ndjxtuacgzctyaox"
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Database connection successful.');
  }
});

module.exports = mysqlConnection;