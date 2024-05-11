const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("./../schema/student");
const attendanceModel = require('./../schema/attendence');

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials " });
    }
    res.send(user);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
});


router.post('/attendance', async (req,res)=>{
        try{
            const {id} = req.body;
            const attendanceData = await attendanceModel.findById(id);
            res.send(attendanceData);
        }catch(err){
            console.log(err,"Some Error Occured in Attendance Route of Student ");
        }
})

module.exports = router;
