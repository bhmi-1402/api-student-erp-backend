const express = require('express')
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Bhoomi is BJP");
})

module.exports = router;