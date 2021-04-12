/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API. example from web-340 git.
;===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request. Git it Gurl");
});

app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request. Put some mustard on it");
});

app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request. Post up big man!");
});

app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request. I'd delete that too.");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});