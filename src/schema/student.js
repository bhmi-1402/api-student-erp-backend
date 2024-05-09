const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const STUDENT = new Schema({
    name : String,
    email : String,
    password : String,
    currentSemester : Number,
    profilePic : String,
    subjects : Object,
    Address : String
},{
    timestamps:true
});

const Student = new model("Students",STUDENT);
module.exports = Student;