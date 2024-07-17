const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("./../schema/student");
const attendanceModel = require('./../schema/attendence');
const { default: mongoose } = require("mongoose");

router.post("/login", async (req, res) => {
  const { Email, Password } = req.body;
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

router.post('/attendance', async (req,res)=>{
        const {id,sem} = req.body;
        try{
            const attendanceData = await attendanceModel.findById({
              StudentId : id,
              Semester : sem
            });
            res.send(attendanceData);
        }catch(err){
            console.log(err,"Some Error Occured in Attendance Route of Student ");
        }
})

module.exports = router;
