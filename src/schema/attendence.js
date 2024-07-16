const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const ATTENDANCE = new Schema({
    StudentId:mongoose.Schema.ObjectId,
    Semester:Number,
    SubjectId:mongoose.Schema.ObjectId,
    SubjectName:String,
    TeacherId:mongoose.Schema.ObjectId,
    BranchName:String,
    BranchId:mongoose.Schema.ObjectId,
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