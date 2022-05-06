var http = require('http');
var url = require('url');
var fs = require('fs');
                                            //visit http://localhost:8080/summer.html or
                                            // http://localhost:8080/winter.html
http.createServer(function (req,res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("tell me the html file bozo...");

        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

//run aid: node demo_fileserver.js