const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("./../schema/teacher");
const attendanceModel = require('./../schema/attendence');
const classModel = require('./../schema/class');
const Result = require("../schema/Result");
const Student = require("./../schema/student");
const Attendance = require("./../schema/attendence");

const addResult = async (StudentId,TeacherId,Subject,TotalMarks,ObtainedMarks,Semester)=>{
    try{
        console.log(ObtainedMarks,typeof(ObtainedMarks));
        await Result.create({
            StudentId,TeacherId,Subject,TotalMarks,ObtainedMarks,Semester
        })

    }catch(err){
        console.log(err);
    }
}

router.get('/fetchStudent',async (req,res)=>{
    const {id} = req.query;
    try{
        if(!id) {
            res.send("Send ID")
            return;
        }
        const response = await Student.find({"Branch._id" : id }).select('_id FullName RollNumber');
        res.send(response)

    }catch(err){
        console.log(err);
    }
})

router.post('/addResult',(req,res)=>{
    try{
        const {Students,TeacherId,Subject,TotalMarks,Semester} = req.body;
        Students.forEach(stu => {
            addResult(stu._id,TeacherId,Subject,TotalMarks,stu.obtainedMarks,Semester);
        });
        res.send("Result is being Updated.Please Check after some time")
    }catch(err){
        console.log(err);
    }
})

router.post("/login", async (req, res) => {
    const { Email, Password } = req.body;
    console.log(Email,Password);
    try {
      const user = await userModel.findOne({ Email });
      if (!user) {
        return res.json({ success: false, message: "User doesn't exist" });
      }
      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch) {
        return res.json({ success: false, message: "Invalid credentials " });
      }
      res.send({success:true,user:user});
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  });

const markAttendance = async(StudentId,Semester,SubjectId,SubjectName,TeacherId,BranchName,BranchId)=>{
    try{
        const attendanceModel = await Attendance.findOne({StudentId,Semester,SubjectId});
        // console.log(attendanceModel);
        if(attendanceModel){
            await Attendance.updateOne({StudentId,Semester,SubjectId},{$inc : { Presents : 1}});
           
            console.log("Updated");
            // attendanceModel.update({Presents : attendanceModel.Presents + 1 , TotalClasses : attendanceModel.TotalClasses + 1});
        }else{
            Attendance.create({
                StudentId,Semester,SubjectId,SubjectName,TeacherId,BranchName,BranchId,Presents:1,TotalClasses:1
            });
        }
    }catch(err){
        console.log(err);
    }
}

router.post('/markAttendance',async (req,res)=>{
    try{
        const {PresentStudents,Semester,SubjectId,SubjectName,TeacherId,BranchName,BranchID} = req.body;
        PresentStudents.forEach(student=>{
          markAttendance(student,Semester,SubjectId,SubjectName,TeacherId,BranchName,BranchID);
        })
        await Attendance.updateMany({BranchId : BranchID ,Semester,SubjectId},{$inc : { TotalClasses : 1}});
        res.send("Attendance is being Updated");
    }catch(err){

    }
})  
  
module.exports = router;
