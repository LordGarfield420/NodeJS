var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "NodeDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("MYSQL is now Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table has been created");
  });
});


//run aid node createTable.js