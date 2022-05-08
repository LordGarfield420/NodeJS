var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodedb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {   
      //this will produce results where the address is starting with 'S'
    if (err) throw err;
    console.log(result);
  });
});

//run aid node wildCardChar.js