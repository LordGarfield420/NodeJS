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
  var sql = "INSERT INTO customers (name, address) values ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data inserted into table successfully!");
  });
});




//run aid node insertInto.js