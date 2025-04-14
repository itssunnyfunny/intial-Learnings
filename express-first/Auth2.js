const express = require("express");
const jwt = require("jsonwebtoken")

const app = express();
const jwtPassword = "password"
 app.use(express.json())

let users = [
    {
        username: "shani yadav",
        email: "shani@gmail.com",
        password: "1333"
    },
    {
        username: "some yadav",
        email: "some@gmail.com",
        password: "13331"
    },
    {
        username: "sona yadav",
        email: "sona@gmail.com",
        password: "1111"
    },
];

function exists(email , passward) {
    let userExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == passward) {
            userExists = true
        }
        return userExists
    }
}


app.post("/signin",function (req, res) {
    let email = req.headers.email;
    let passward = req.headers.passward;

    if (!exists(email,passward)) {
        res.status(401).json({
            msg: "Your doesn't exist in our datatbase"
        })
    } else {
        let token = jwt.sign({email: email},jwtPassword)
        res.json(
            token
        )
    }
});


app.get("/users",(req,res)=>{
    let token = req.headers.authorization;
   
    try {
       let decode = jwt.verify(token, jwtPassword) 
       let email = decode.email;
       res.json({
        Users: users.filter((all)=>{
            if (all.email === email) {
                return false
            } else {
                return true
            }
        })
       })
    } catch (error) {
        res.status(403).json({
            msg: "Invalid token"
        })
    }
})

app.listen(3001)