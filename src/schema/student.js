const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const STUDENT = new Schema({
    FullName : String,
    Email : String,
    Password : String,
    CurrentSemester : Number,
    profilePic : String,
    Gender: String,
    Address : String,
    Branch:String,
    RollNumber:String,
    DateOfBirth:Date,
    PhoneNumber:Number
    
},{
    timestamps:true
});

const Student = new model("Students",STUDENT);
module.exports = Student;