const { model, Schema, Model } = require("mongoose");
const mongoose = require('mongoose');

const Notice = new Schema({
  Title : String,
  Body : String,
  Sender : Object
},{
    timestamps : true
});

const NOTICE = new model("Notice",Notice);
module.exports = NOTICE;