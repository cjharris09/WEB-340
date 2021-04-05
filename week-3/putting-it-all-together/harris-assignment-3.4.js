/*
=======================================================
  Title: harris-assignment-3.4
  Author: Chris Harris
  Date: 4 April 2020
  Description: this is the server information that will run the server
========================================================
*/

/*these are the requirement statements*/ 
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
/*set the express variable as app*/ 
var app = express();
/*set view and view engine*/ 
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
/*set logger*/ 
app.use(logger('short'));
/*index and message in the homepage*/ 
app.get('/', function(request, response) {
    response.render('index', {
        message:'homepage'
    });
});
/* message in the about page*/ 
app.get('/about', function(request, response) {
    response.render('about', {
        message:'about page'
    });
});
/* message in the contact page*/ 
app.get('/contact', function(request, response) {
    response.render('contact', {
        message:'contact page'
    });
});
/* message in the products page*/
app.get('/products', function(request, response) {
    response.render('products', {
        message:'products page'
    });
});
/* set up server and specify what port to use*/
http.createServer(app).listen(8080, function() {
    console.log('Application started and listening on port 8080');
});