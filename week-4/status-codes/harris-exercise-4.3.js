var express = require('express');

var http = require('http');
var app = express();

app.get('/not-found', function(req, res){
    res.status(404);
    res.json({
        message: 'Resource not found.'
    })
});

app.get('/ok', function(req, res){
    res.status(200);
    res.json({
        message: 'Page loaded correctly.'
    })
});

app.get('/not-implemented', function(req, res){
    res.status(501);
    res.json({
        message: 'Page not implemented.'
    })
});

http.createServer(app).listen(8080, function(){
    console.log('Application started on port 8080')
})

