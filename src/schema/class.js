const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const CLASS = new Schema({
    Name : String,
    Alias : String,
    Students : [mongoose.Schema.ObjectId],
    Semester : Number,
    Subjects : [Object]
});

const Class = new model("Class",CLASS);
module.exports = Class;