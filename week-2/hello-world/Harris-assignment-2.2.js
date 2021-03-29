/*
============================================
; Title: Assignment 2.2 web 340
; Author: Chris Harris
; Date: 28 March 2021
; 
;===========================================
*/

var express = require('express');
var http = require('http');

var app = express();
//when a request comes in response
app.use(function(req, res){
    console.log('in comes a request to: %s', req.url);

    res.end('Hello World\n')
})
//create server on 8080 port
http.createServer(app).listen(8080, function(){
    console.log('Application started on port %s', 8080)
});

