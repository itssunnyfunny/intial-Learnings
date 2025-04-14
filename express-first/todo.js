const express = require('express')
const cors = require('cors')


const app = express();

app.use(cors())
    
app.get( "/Recoil", (req,res)=>{
    const id = req.params.id
    let todo = [
       {
           id: 1,
           title: "Library",
           description: "lot of things is happening in library"
       },
       {
           id: 2,
           title: "Collage",
           description: "lot of things is happening in collage"
       }
    ]
    // const result = todo.find(x => x.id ===id)
    res.json(todo)
    
});

app.get("/notification",(req,res)=>{
    res.json({
        network: 12,
        jobs: 123,
        notifications: 23,
        massaging: 11
    })
});



app.listen(3001)