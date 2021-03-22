/*
============================================
; Title: exercise 1.3
; Author: Chris Harris
; Date: 21 March 2021
; Description: exercise to parse a url
Not currently working produces and error that says cannot find module and then the directory to the file after googling on stack overflow
the best answer that I could up with was to uninstall and reinstall node.js that still did not work however. 
;===========================================
*/


var url = require("url"); 

var parsedURL = url.parse("https://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);