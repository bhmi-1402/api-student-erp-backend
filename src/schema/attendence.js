const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const ATTENDANCE = new Schema({
    
    studentID : mongoose.Schema.ObjectId,
    
    subject1Name : String,
    subject1Attendance  : Number,
    subject1total  : Number,

    subject2Name : String,
    subject2Attendance  : Number,
    subject2total  : Number,

    subject3Name : String,
    subject3Attendance  : Number,
    subject3total  : Number,

    subject4Name : String,
    subject4Attendance  : Number,
    subject4total  : Number,

    subject5Name : String,
    subject5Attendance  : Number,
    subject5total  : Number,
},{
    timestamps:true
});

const Attendance = new model("Attendance",ATTENDANCE);
module.exports = Attendance;