/*
=======================================================
  Title: harris-exercise-7.4
  Author: Chris Harris
  Date: 2 MAY 2021
  Description: 
========================================================
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var employeeSchema = new Schema({

    firstName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true},

});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;