

const express = require("express");
const cors = require("cors")

const app = express();

 app.use(cors());
app.use(express.json())


app.get("/sum",(req,res)=>{

   const a = parseInt( req.query.a);
   const b = parseInt( req.query.b);
    console.log(a, b);
    
    const sum = a + b;
    console.log(sum);
    
    res.send({sum: sum});
});


app.get("/interest",(req,res)=>{
    const principal = parseInt(req.query.principal);
    const rate =  parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    const interest = (principal*rate*time)/100;
    const total = interest + principal;

    res.send({
        total: total,
        interest: interest
    })
});

app.listen(3000);
