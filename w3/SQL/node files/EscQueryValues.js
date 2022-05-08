var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "nodedb"
});


//this will produce results where their names are 'Amy' and their address are 'Mountain 21'
con.connect(function(err) {
  if (err) throw err;
  var name = 'Amy';
  var adr = 'Mountain 21';
  //Escape the name and the address values:
  var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
  //Send an array with value(s) to replace the escaped values:
  con.query(sql, [name, adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});



//run aid node EscQueryValues.js