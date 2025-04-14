const express = require("express");

// zod is a library for input validations just it
 const zod = require("zod")

 const app = express();
// difinig the type of input 
 const schema = zod.array(zod.number());

 // nuber of type inputs in an object
  const schema2 = zod.object({
    email: zod.string(),
    passwoad: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
  })

 app.use(express.json())

 app.post("/kidneys",(req, res)=>{
     let kidneys = req.body.kidneys

     // how to use it 
     const response = schema.safeParse(kidneys);
    //  let kidneylength = kidneys.length

     res.send({
        response
     })
 })

 app.listen(3001)