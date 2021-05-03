

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var employeeSchema = new Schema({

    firstName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true},

});

var Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;