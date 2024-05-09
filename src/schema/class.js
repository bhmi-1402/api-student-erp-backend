const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const CLASS = new Schema({
    name : String,
    students : [mongoose.Schema.ObjectId],
    semester : Number
},{
    timestamps:true
});

const Class = new model("Class",CLASS);
module.exports = Class;