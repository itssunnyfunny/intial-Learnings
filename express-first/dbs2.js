// 1 setup the app and mongoose and and jwt
// 2 connecting to database and defining the schema 
// 3 making a post request 
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");


const jwtPassword = "333321"

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://metestfor:metestfor@cluster0.x9oq7.mongodb.net/myuser?retryWrites=true&w=majority&appName=Cluster0");

const User =  mongoose.model('newusers',{email: String, password: String, username: String});


// user signup and return token
app.post("/signup",(req,res)=>{
    const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  const user = User.create({
    email: email,
    password: password,
    username: username
  });
  
  user.save();

  const token = jwt.sign({_id:user._id},jwtPassword)
  res.send(token)

});

// user authentication middleware 

app.use(function (req,res,next) {
  try {
    const token = req.headers.authorization;

    const decode = jwt.verify(token,jwtPassword);
      if (decode) {
        next();
      } else {
        res.json({
            msg: "token con't verified "
        })
      }
  } catch (error) {
      res.send("something went wrong, server, token checking")
  }

});

// getting the user

app.get("/user",(req,res)=>{
    const decode = jwt.decode(req.headers.authorization);
    const user =  User.findById({_id:decode._id});
    res.json({
        user: user
    })
});


// updating user

app.put("/update",(req,res)=>{
    const userUpdate = req.body;
    const decode = jwt.decode(req.headers.authorization)
    const user = User.findByIdAndUpdate({_id:decode._id},userUpdate, {new: true});
    
    res.json({
        msg: "user successfully updated!",
        user
    })
});


// deleteing user

app.delete("/delete",(req,res)=>{
    const decode = jwt.decode(req.headers.authorization);
    const user = User.findByIdAndDelete({_id: decode._id})
    res.json({
        msg: "user successfully deleted !!",
        user
    })
})