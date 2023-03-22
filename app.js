
var http = require('http');
var content = function(req, res) {
    res.end("Hello World\n");
    res.writeHead(200);
}

var app = http.createServer(content);
module.exports = app;