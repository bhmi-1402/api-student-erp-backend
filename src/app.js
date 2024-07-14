const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const studentRouter = require('./routes/student')
const teacherRouter = require('./routes/teacher')
const adminRouter = require('./routes/admin');

const cors = require('cors');
const Connect  = require('./config/connectDB');


Connect.connectdb();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/student',studentRouter);
app.use('/teacher',teacherRouter);
app.use('/admin',adminRouter);

// Route


module.exports = app;
