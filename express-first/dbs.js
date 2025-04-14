const express = require("express");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const jwtPassword = "654321"

const app = express();
app.use(express.json())
let cum = 'mongodb+srv://metestfor:metestfor@cluster0.x9oq7.mongodb.net/'

mongoose.connect("mongodb+srv://metestfor:metestfor@cluster0.x9oq7.mongodb.net/newusers?retryWrites=true&w=majority&appName=Cluster0");

const User = mongoose.model('users',{name: String, email: String, password: String});

// const user = new User( {name: 'shani yadav', email:'shani@gmail.com', password: '123456'})

// user.save().then((ok)=>console.log(ok)

// post the data 
app.post("/signup",async function (req,res) {
  try {
    let {email,password,username} = req.body

    let existingUser = await User.findOne({email:email})
    if (existingUser) {
        return res.status(400).json({
            msg: "user allready exitsts"
        })
    }

    const user = new User({
        name: username,
        email: email,
        password: password
    })

    user.save().then((use) =>console.log(use));

    const token = jwt.sign({ _id: user._id }, jwtPassword);
    res.json({
        msg: "user created successfully",
        token: token
    })
  } catch (error) {
    res.status(500).json({
        msg: "server error"
    })
  }
});

// Gitting the data 
app.get("/data", async function (req,res) {
   try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token,jwtPassword);

    const user = await User.findById({_id: decoded._id})
    console.log(user);
    
      res.send(user)
   } catch (error) {
    res.status(500).json({
        msg: "sever error !"
    })
   }
});


// updating the user info
app.put("/update",async function (req,res) {
  try {
    let token = req.headers.authorization;
    let updateData = req.body;

    const decode = jwt.verify(token,jwtPassword);

    let user = await User.findByIdAndUpdate(decode._id, updateData, {new:true});

    res.send(user)
  } catch (error) {
    res.status(500).json({
        msg: "sever error update"
    })
  }

});


// deleting users account
app.delete("/delete",async function (req,res) {
   try {
    const token = req.headers.authorization;
    const decode = jwt.verify(token,jwtPassword);
    let user =await User.findByIdAndDelete(decode._id);
    if (!user) {
        return res.status(404).send("user not found")
    }

    res.send(user).json({
        msg: "user delete successfully"
    })
   } catch (error) {
    res.status(500).json({
        msg : "server error delete"
    })
   }
})


// sucess party @@@@@@@@@@@@@@@@@
app.listen(3001)