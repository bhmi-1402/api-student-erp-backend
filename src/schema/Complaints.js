const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const COMPLAINTS = new Schema({
  Title : String,
  Body : String,
  Sender : Object
},{
    timestamps : true
});

const Complaints = new model("Complaints",COMPLAINTS);
module.exports = Complaints;