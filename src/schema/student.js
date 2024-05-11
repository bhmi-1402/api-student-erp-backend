const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const STUDENT = new Schema({
    name : String,
    email : String,
    password : String,
    currentSemester : Number,
    profilePic : String,
    subjects : Object,
    Address : String,
    gender:String,
    branch:String,
    subject1:String,
    subject2:String,
    subject3:String,
    subject4:String,
    subject5:String,
    rollNumber:String
},{
    timestamps:true
});

const Student = new model("Students",STUDENT);
module.exports = Student;