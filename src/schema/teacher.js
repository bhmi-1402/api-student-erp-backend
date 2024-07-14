const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const TEACHER = new Schema({
    FullName : String,
    Email : String,
    Password : String,
    Lectures : [Object],
    Gender:String,
    isAdmin:Boolean,
    PhoneNumber:Number
},{
    timestamps:true
});

const Teacher = new model("Teacher",TEACHER);
module.exports = Teacher;