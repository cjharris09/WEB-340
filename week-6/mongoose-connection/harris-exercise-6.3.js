// require
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

//connections
var mongoDB = 'mongodb+srv://cjharris:admin@buwebdev-cluster-1.wqwen.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Application connected to mLab')
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function () {
    console.log('Application started and listening on port 5000')
    
})