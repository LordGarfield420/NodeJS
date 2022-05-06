var http = require('http');

//create a server object
http.createServer(function (req, res) {
    res.write('this is just text bro'); //write a response to the client
res.end(); //end the response
}).listen(4444); //server obj listens on port 8080