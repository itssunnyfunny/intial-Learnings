const mongoose = require("mongoose");
// routes 
const express = require("express");
const { z } = require("zod");
const router =  express.Router();
const jwt = require('jsonwebtoken');
const JWt_SCRETE = "1321232243"


mongoose.connect("url");

const customerSchema = new mongoose.Schema({
    firstName:String,
    lastName: String,
    password: String,
    email:String,
    number: Number
});

const BarberSchema = new mongoose.Schema({
    shopName: String,
    Address: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String
})


const Customer = mongoose.model("customers",customerSchema);
const Barber = mongoose.model("barbers", BarberSchema);

module.exports = {Customer, Barber}

// routes

// custumer
const userSignup = z.object({
    firstName: z.string(),
    lastName:  z.string(),
    password:  z.string(),
    email: z.string().email(),
    number: z.number().min(10).max(10)
})
router.post("/user/signup",(req,res)=>{
     const {success} = userSignup.safeParse(req.body);
     if (!success) {
        res.status(411).json({
            massege: "you should check our inputs / fill informations currectly"
        })
     }
     const cst = Customer.create(req.body)
     cst.save();

     const token = jwt.sign({_id:cst._id},JWt_SCRETE)

     res.json({
        msg: "You successfully Signup ",
        token: token
     })

});

const checkHim  = (req, res, next)=>{
    const token = req.headers.authorization;
    if (!token || token.startWith('Bearer ')) {
        res.status(404).json({
            msg: "you are not signIn"
        })
    }

    const pureToken = token.split(' ')[1]

    const decoded = jwt.verify(pureToken, JWt_SCRETE);
    if (!decoded) {
        res.status(411).json({
            msg: "Your token are Invalid"
        })
    }else{
        req.userId = decoded._id
        next()
    }

};

const updateDataZ = z.object({
    firstName: z.string().optional(),
    lastName:  z.string().optional(),
    password:  z.string().optional(),
    email: z.string().email().optional(),
    number: z.number().min(10).max(10).optional()
})

router.put("/user/updateInfo",checkHim,async(req, res)=>{
        const updateData =  req.body
        const {success} = updateDataZ(updateData);
        if (!success) {
            res.status(411).json({
                msg: "Inputs are Invalid "
            })
        };
    const update=  await  Customer.updateOne({_id: req.userId},updateData)
    if (update) {
        res.json({
            msg: "your data has been updated",
            updatedData : update
        })
    }
});
