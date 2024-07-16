const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const RESULT = new Schema({
    StudentId : mongoose.Schema.ObjectId,
    TeacherId : mongoose.Schema.ObjectId,
    Subject : Object,
    TotalMarks : Number,
    Semester : Number,
    ObtainedMarks : Number,  
},{
    timestamps:true
});

const Result = new model("Result",RESULT);
module.exports = Result;