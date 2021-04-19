/*
=======================================================
  Title: harris-exercise-5.3
  Author: Chris Harris
  Date: 18 April 2021
  Description: this is the server information that will run the server
========================================================
*/

//require statements
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');
// route to follow
app.get('/', function(request, response){
    response.render('index', {
        message:'welcome to my Pug based homepage!'
    });
});
//create server
http.createServer(app).listen(8080, function(){
    console.log('Application started on port 8080!!')
});
