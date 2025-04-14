const express = require("express")
const app = express()

app.use(express.json())

app.use(function AuthMiddleware(req,res,next) {
    let username = req.headers.username;
    let passward = req.headers.passward;
    if (username != "shani" && passward != "pass") {
        res.status(401).json({
            msg: "the input is not valid"
        })
    } else {
        next()
    }
})

function kidneyMiddleware(req,res,next) {
    let kidneys = req.query.kidneys;
    if (kidneys != 1 && kidneys != 2) {
        res.status(401).json({
            msg: "number of kineys is invalid"
        })
    } else {
        
    }
}

app.get("/health",(req,res)=>{
   // do something about your health

   res.json({
    msg: "Your health is good"
   })
})

app.get("/kidneys", kidneyMiddleware,(req,res)=>{
    // do something about your kidneys

    res.json({
        msg: "your kidneys is good enough"
    })
})

app.use(function (err,req,res,next) {
    res.json({
        msg: "sorry something up with server"
    })
})


app.listen(3000);