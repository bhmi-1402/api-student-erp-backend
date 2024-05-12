const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const studentModel = require("./../schema/student");
const teacherModel = require("./../schema/student");
const attendanceModel = require('./../schema/attendence');

router.post('/addToTeachers',async (req,res)=>{
    const {name,email,password,lectures} = req.body;
    try{
        const salt=await bcrypt.genSalt(10);
        const hashed=await bcrypt.hash(password,salt);
        const id =await teacherModel.create({
            name,
            email,
            password:hashed,
            lectures

        });
        res.send(id);
    }
    catch(error){
        console.log(error);
        res.send({success:false,message:"Error"});
    }

})

router.post('/addToStudents',async (req,res)=>{
    const {name,email,password,gender,branch,rollNumber,currentSemester,subject1,subject2,subject3,subject4,subject5} = req.body;
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        const resp =  await studentModel.create({
            name,
            email,
            password:hash,
            currentSemester,
            rollNumber,
            branch,
            gender,
            subject1,
            subject2,
            subject3,
            subject4,
            subject5,
        });
        
        await attendanceModel.create({
            studentID : resp._id,
            "subject1Name" : subject1,
            "subject2Name" : subject2,
            "subject3Name" : subject3,
            "subject4Name" : subject4,
            "subject5Name" : subject5,
        });

        res.send(resp);
    }catch(err){
        console.log(err);
        res.send({error:true});
    }
});

module.exports = router;
