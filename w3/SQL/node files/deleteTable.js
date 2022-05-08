

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodedb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE tablename";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});




//run aid node deleteTable.js

//use this snippet to delete a table ONLY IF it exists

/*

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodedb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE IF EXISTS tablename";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


*/
