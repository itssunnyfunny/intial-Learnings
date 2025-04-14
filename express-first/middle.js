const express = require("express")

const app = express();

// request counter

 let numberOfRequests = 0;
 function requestCouter(req,res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
    
 }

 app.use(requestCouter)
 // it call before every routes 
 // and its work like middlewares


// intro of middlewares for user authentication

// userAuth checking
function userMiddleware(req, res, next) {
    let username = req.headers.username;
    let passward = req.headers.passward;

    if (username != "shani" && passward != "pass") {
        res.status(401).json(
            {
                msg: "Inputs are invalid "
            }
        )
    }else{
        next()
    }
}

// number of kidney checkup
function kidneyMiddleware(req,res, next) {
    let kidneyId = req.query.kidneyId;
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(401).json({
            msg: "Number of Kidneys are invalid "
        })
    }else {
        next()
    }
}

// next() is used to if conditions pass call / run the next function 


app.get("/health",userMiddleware,kidneyMiddleware,(req, res)=>{
    // do something here for heart

    res.json({
        msg: "your health is good"
    })
});

app.get("/kidney-checkup",userMiddleware,kidneyMiddleware,(req,res)=>{
    // do something here for kidney
    res.json({
        msg: "Your kidney is good"
    })
})

app.listen(3001);