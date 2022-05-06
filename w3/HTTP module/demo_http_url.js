   var http = require('http');                         //node.js app for reading the query string
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});                      
    res.write(req.url);
    res.end();

}).listen(8080);        


/* var http = require('http');                     //this runs a date. example: http://localhost:8080/?year=2022&month=May   This will print as 2022 May
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.word1 + " " + q.word2;          //replaced year and month with word1 and word2. works as the same as before
  res.end(txt);
}).listen(8080);     */ 