/*
============================================
; Title: exercise 1.3
; Author: Chris Harris
; Date: 21 March 2021
; Description: exercise to parse a url

;===========================================
*/


var url = require("url"); 

var parsedURL = url.parse("https://www.mynameis.com/profile?slimshady");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);