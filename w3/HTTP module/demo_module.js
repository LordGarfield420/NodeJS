var http = require('http');  
var dt = require('./myfirstmodule');   

//require() is a function used to include a module
//http is a module
//importng the date module from the other script that we made
//creating a server

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("current date and time is: " + dt.myDateTime());
    res.end();
}).listen(8080);

