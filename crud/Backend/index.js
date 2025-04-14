// initialise you project 

const express = require("express");
const app = express();

const {createTodo,updateTodo} = require("./types")
const {todo} = require("./db")
const cors = require("cors")




// making a route
app.use(cors())
app.use(express.json());

app.post("/create",async(req,res)=>{

    const Payload = req.body;
    const parsePayload = createTodo.safeParse(Payload)

    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return ;
    };

    const user = await todo.create({
        title: Payload.title,
        description: Payload.description,
        completed: false
    })

user.save()
res.json({
    msg: "Todo created"
})

});

app.get("/todos", async function (req,res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.get("/todos/:id",async function (req, res) {
    const id = req.params.id;
    console.log(id);
    
    const data = await todo.findOne({id: id});
    console.log(data);
    

    res.json({
        data : data
    })
})


app.put("/completed", async function (req,res) {
    const updatePayload = req.body;
     const parseUpdatePayload = updateTodo.safeParse(updatePayload);
     if (!parseUpdatePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input"
        });
        return;
     };
     
     await todo.updateOne({
        _id: updatePayload._id
     },{
        completed: true
     })
    res.json({
        msg : "Todo marked as completed"
    })

});


app.listen(3001);