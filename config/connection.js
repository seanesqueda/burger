// Set up MySQL connection.
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
      host: "op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "tv5qwsj3urpfj67l",
      password: "	pj7q8agijq38ewew",
      database: "wy2azn99ptgxwhi9"
  });
}

// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
