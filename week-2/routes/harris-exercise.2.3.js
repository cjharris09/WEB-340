/*
============================================
; Title: Assignment 2.3 web 340
; Author: Chris Harris
; Date: 28 March 2021
; 
;===========================================
*/

var express = require('express');
var http = require('http');

var app = express();

//routes
app.get('/', function(req, res){
    res.end('Welcome to homepage.\n');// When a request to the homepage is made display "Welcome to the homepage."
});

app.get('/about', function(req, res){
    res.end('Welcome to the about page.\n');// When a request to the about page is made display "Welcome to the about page."
});

app.get('/contact', function(req, res){
    res.end('Welcome to the contact page.\n');// When a request to the contact page is made display "Welcome to the contact page."
});

app.use(function(req, res){
    res.statusCode = 404;
    res.end('404!\n')// 404 error when a bad request is made.
});

http.createServer(app).listen(3000, function(){
    console.log('Application started on port %s', 3000);// starts the server on port 3000
});

