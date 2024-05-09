const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const studentRouter = require('./routes/student')
const teacherRouter = require('./routes/teacher')
const cors = require('cors');
const connectdb  = require('./config/connectDB');

connectdb();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/student',studentRouter);
app.use('/teacher',teacherRouter);

// Route


module.exports = app;
