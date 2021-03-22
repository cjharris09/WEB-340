/*
============================================
; Title: exercise 1.5 hello world
; Author: Chris Harris
; Date: 21 March 2021
; Description: exercise to parse a url

;===========================================
*/


var http = require("http");

function processRequest(req, res){
    var body = "Is there anyone out there!!";
    var contentLength = body.length;
    res.writeHead(200,{
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
var s = http.createServer(processRequest);
s.listen(8080);