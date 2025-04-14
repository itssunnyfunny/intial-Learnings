 const express = require("express");

 const app = express();

 app.use(express.json())

 app.post("/kidneys",(req, res)=>{
     let kidneys = req.body.kidneys
     let kidneylength = kidneys.length
     res.send(" your have "+ kidneylength + " Kidneys")
 })

 // we uses a global catches in condition of err input wrong type inputs {!json}
 app.use(function (err,req,res,next) {
    res.json({
        msg: "Sorry something is up with our server"
    })
 })


 app.listen(3001)