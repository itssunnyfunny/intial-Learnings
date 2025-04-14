const bodyParser = require("body-parser");
const express = require("express");
const AdminRouter = require("./Routes/admin");
const UserRouter = require("./Routes/user")

const app = express();



app.use(bodyParser.json());
app.use("/admin", AdminRouter);
app.use("/user",UserRouter);

const PORT = 3001;

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
});
