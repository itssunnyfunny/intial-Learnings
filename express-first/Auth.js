const jwt = require("jsonwebtoken");

const express = require("express");
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const All_Users = [
    {
      username: "shani@gmail.com",
      passward: "123",
      user:  "shaniyadav"
},
{
    username: "sanjay@gmail.com",
    passward: "12321",
    user:  "sanjayyadav"
},
{
    username: "shubham@gmail.com",
    passward: "123321",
    user:  "shubhamyadav"
},
]

function userExists(username,passward) {
    // do some if user exists
    // return true or false

    let userExist = false;
   for (let i = 0; i < All_Users.length; i++) {
      if (All_Users[i].username == username && All_Users[i].passward == passward) {
        userExist = true
      }
    
   }

    return userExist
}

app.post("/signin",function (req,res) {
    const username = req.headers.username;
    const password = req.headers.passward;

    if (!userExists(username,password)) {
        return res.status(403).json({
            msg: "User don't exist in our inMemory DB"
        })
    }

    var token = jwt.sign({username: username},jwtPassword);
    return res.json({
        token
    })
})

app.get("/users",function (req,res) {
    const token = req.headers.authorization;
    try {
       const decode = jwt.verify(token, jwtPassword) 
       const username = decode.username;
       res.json({
        users: All_Users.filter((value)=>{
            if (value.username == username) {
                return false    
            } else {
                return true
            }
        })
       })
    } catch (error) {
        res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(3001)