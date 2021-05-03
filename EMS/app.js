/*
=======================================================
  Title: harrisEMS
  Author: Chris Harris
  Date: 2 MAY 2021
  Description: 
========================================================
*/

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();

var mongoose = require("mongoose");

var Employee = require("./models/employee");

var mongoDB = 'mongodb+srv://cjharris:admin@buwebdev-cluster-1.wqwen.mongodb.net/test';

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));
app.get('/', function  (request, response) {
    response.render('index', {
        title:'Home page'
    }); 
});

http.createServer(app).listen(8080, function () {
    console.log('Application started and listening on port 8080')
})