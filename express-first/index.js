const express = require('express');

const app = express();

const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/",function (req,res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidney =numberOfHealthyKidney + 1;
        }
        
    }
    let numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney
    })
});

app.post("/",function (req,res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "status is updated "
    })
})

app.put("/",function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
        
    }
    res.json({
        msg: "all is good"
    })
});

app.delete("/",function (req,res) {
   if (isThereAtleastOneUnhealthyKindey()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
         if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
         }
        
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: " removed unhealthy"
    })
   } else {
    res.status(411).json({
        msg: "you don't have any unhealthy kidney"
    })
   }
});

 function isThereAtleastOneUnhealthyKindey() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true
        }
        
    }
    return atleastOneUnhealthyKidney
 }

app.listen(3000);
