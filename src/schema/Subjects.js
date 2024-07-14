const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const SUBJECTS = new Schema({
    Name : String,
    Alias : String
},{
    timestamps:true
});

const Subjects = new model("Subjects",SUBJECTS);
module.exports = Subjects;