const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const TEACHER = new Schema({
    name : String,
    email : String,
    password : String,
    lectures : [Object],
    
},{
    timestamps:true
});

const Teacher = new model("Teacher",TEACHER);
module.exports = Teacher;