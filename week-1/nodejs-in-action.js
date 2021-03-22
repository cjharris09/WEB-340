/*
============================================
; Title: exercise 1.5 hello world
; Author: Chris Harris
; Date: 21 March 2021
; Description: exercise to parse a url
Not currently working produces and error that says 'cannot find module' and then the directory to the file after googling on stack overflow
the best answer that I could up with was to uninstall and reinstall node.js that still did not work however. 
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