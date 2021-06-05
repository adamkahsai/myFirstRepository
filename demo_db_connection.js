var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Adam1990#",
  database:"testdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});