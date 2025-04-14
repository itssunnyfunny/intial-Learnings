import { Express,Router } from "express";
import z from 'zod'
import jwt from 'jsonwebtoken'
const jwtPassword = "mysecretpassword";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const router = Router();

// zod validation
const signupInput = z.object({
    email: z.string() ,
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
})

router.post("/signup",async(req:any, res:any)=>{
   const body = req.body;
   const{success} = signupInput.safeParse(body);
   if (!success || !body) {
     return res.status(411).json({
        msg: "Inputs are not valid for signup "
      })
   };
   const sign = await prisma.user.create({
    data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password
    },
    select: {
        email: true,
        firstName: true,
        lastName: true,
        password: true
    }
   });
   const token = jwt.sign({id: sign.email},jwtPassword);

  res.json({
    token: token
  })
});

router.post("/login",async () => {
    
});


 
router.put("/update",(req ,res)=>{
     const body = req.body

});

router.delete("/delete",()=>{

})

