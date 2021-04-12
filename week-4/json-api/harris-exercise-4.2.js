/*
============================================
; Title:  exercise-4.2.js
; Author: Chris Harris
; Date:   11 April 2021
; Description: exercise-4.2
;===========================================
*/
var express = require('express');

var http = require('http');
var app = express();

app.get('/customer/:id', function(req, res){
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName:'Leo',
        lastName:'Tolstoy',
        employeeId: id
    });
});

http.createServer(app).listen(8080, function(){
    console.log('Application started on port 8080')
});