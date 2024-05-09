const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const userModel = require("./../schema/student");
const attendanceModel = require('./../schema/attendance');
const classModel = require('./../schema/class');


module.exports = router;
