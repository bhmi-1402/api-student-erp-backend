const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const ATTENDANCE = new Schema({
    StudentId:String,
    Semester:Number,
    SubjectId:String,
    SubjectName:String,
    TeacherId:String,
    BranchName:String,
    BranchId:String,
    Presents:{
        type:Number,
        default:0
    },
    TotalClasses:{
        type:Number,
        default:0
    }
},{
    timestamps:true
});

const Attendance = new model("Attendance",ATTENDANCE);
module.exports = Attendance;