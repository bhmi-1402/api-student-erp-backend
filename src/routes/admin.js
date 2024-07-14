const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const studentModel = require("./../schema/student");
const teacherModel = require("./../schema/teacher");
const attendanceModel = require("./../schema/attendence");
const Student = require("./../schema/student");
const Subjects = require("../schema/Subjects");
const Class = require('../schema/class');

router.post("/addToTeachers", async (req, res) => {
  const { FullName, Email, Password, Gender, isAdmin, PhoneNumber } = req.body;

  try {
    if (
      !FullName ||
      !Email ||
      !Password ||
      !Gender ||
      !isAdmin ||
      !PhoneNumber
    ) {
      res.send({
        error: true,
        message: "Some Fields are missing ! send all data ",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(Password, salt);
    const id = await teacherModel.create({
      FullName,
      Email,
      Password: hash,
      Gender,
      isAdmin,
      PhoneNumber,
    });
    res.send(id);
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "Sorry ! Some Error Occurred " });
  }
});

router.post("/addToStudents", async (req, res) => {
  const {
    FullName,
    Email,
    Password: hash,
    CurrentSemester,
    Class,
    Address,
    Gender,
    Branch,
    RollNumber,
    DateOfBirth,
    PhoneNumber,
  } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const resp = await studentModel.create({
      FullName,
      Email,
      Password: hash,
      CurrentSemester,
      Class,
      Address,
      Gender,
      Branch,
      RollNumber,
      DateOfBirth,
      PhoneNumber,
    });

    await attendanceModel.create({
      StudentID: resp._id,
    });

    res
      .send({
        message: "Student Created Succesfully",
        data: resp,
      })
      .status(201);
  } catch (err) {
    console.log(err);
    res.send({
      error: true,
      message: "Sorry ! Can't create Student right now",
    });
  }
});

router.post("/addSubject", async (req, res) => {
  try{
    const {subjectName , alias } = req.body;
    const resp = await Subjects.create({
      Name : subjectName,
      Alias : alias 
    });

    res.send(resp);

  }catch(err){
    console.log(err);
    res.send({
      error : true,
      message : "Error At Backend"
    })
  }
});

router.post('/addClass',async (req,res)=>{
  try{
    const {Name,Subjects,Semester,Alias} = req.body;
    const resp = await Class.create({
      Name,Semester,Subjects,Alias
    })
    res.send(resp);
  }catch(err){
    console.log(err);
  }
})

router.get('/subject', async (req,res)=>{
  try{
    const data = await Subjects.find();
    res.send(data);
  }catch(err){
    console.log(err);
    res.send({error : true,message : "Unable to fetch,Database down"});
  }
})

module.exports = router;
