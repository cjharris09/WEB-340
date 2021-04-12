/*
============================================
; Title:  crud.js
; Author: Chris Harris
; Date:   11 April 2021
; Description: Demonstrates CRUD operations in a
;              Node.js API. example from web-340 git.
;===========================================
*/

const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);
//get request that will display the message "API invoked as an HTTP GET request. Git it Gurl"
app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request. Git it Gurl");
});
//put request that will display the message "API invoked as an HTTP PUT request. Put some mustard on it"
app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request. Put some mustard on it");
});
//post request that will display the message "API invoked as an HTTP POST request. Post up big man!"
app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request. Post up big man!");
});
//delete request that will display the message "API invoked as an HTTP DELETE request. I'd delete that too."
app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request. I'd delete that too.");
});
//creating the server on the port that is specified above
http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});