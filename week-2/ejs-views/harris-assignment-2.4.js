/*
============================================
; Title: Assignment 2.4 web 340
; Author: Chris Harris
; Date: 28 March 2021
; 
;===========================================
*/

var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

app.set('views', path.resolve(__dirname, 'views'));// directory name to follow
app.set('view engine', 'ejs');// use the ejs view engine
app.get('/', function(request, response){
    response.render('index', {
        firstName: "Chris",//this is the information that is being pulled and populated in the index.ejs file.
        lastName: "Harris",//this is the information that is being pulled and populated in the index.ejs file.
        address: "123 Richard Cheese Court"//this is the information that is being pulled and populated in the index.ejs file.
    });
});

http.createServer(app).listen(8080, function(){//Creates server to run on port 8080.
    console.log('EJS-Views app started on port 8080');
});



