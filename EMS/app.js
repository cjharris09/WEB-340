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
var helmet = require('helmet');
var csrf = require('csurf');
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");


var csrfProtection = csrf({cookie: true});

var mongoose = require("mongoose");

var Employee = require("./models/employee");

var mongoDB = 'mongodb+srv://cjharris:admin@buwebdev-cluster-1.wqwen.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB error: '));
    db.once('open', function() {
    console.log('Application connected MongoDB');
});

app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});



var csrfProtection = csrf({cookie: true});

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('short'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(helmet.xssFilter());
app.use(csrfProtection);
app.get('/', function  (request, response) {
    response.render('index', {
        title:'Home page'
    }); 
});



http.createServer(app).listen(8080, function () {
    console.log('Application started and listening on port 8080')
})