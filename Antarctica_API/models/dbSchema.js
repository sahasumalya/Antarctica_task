const mongoose = require('mongoose');

const employee_schema = new mongoose.Schema({
   fname : String,
   lname : String,
   email : String,
   password : String,
   employeeID : String,
   orgName : String,
   
});

exports.employeeSchema = employee_schema;