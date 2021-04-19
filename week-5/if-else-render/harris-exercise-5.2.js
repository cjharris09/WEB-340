/*
=======================================================
  Title: harris-exercise-5.2
  Author: Chris Harris
  Date: 18 April 2021
  Description: this is the server information that will run the server
========================================================
*/
//require
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
//array full of fruits
var f = [
    "Apple",
    "Blueberry",
    "Orange",
    "Strawberry"
];
//get request for the index
app.get('/', function(request, response){
    response.render('index', {
        fruits: f
    });
});
//create server
http.createServer(app).listen(8080, function() {
    console.log('Application started on port 8080.')
    
})