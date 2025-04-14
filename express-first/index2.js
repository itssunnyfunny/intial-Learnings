const express= require("express");

const app = express();
app.use(express.json());

let patiant = {
    Kidney:[
        {
            healthy : false
        }
    ]
}

 console.log(patiant.Kidney.length);
 
// get

// number of Kidneys, number of unhealthyKidneys , number of HealthyKidneys

app.get("/",(req, res)=>{
  let patiantKidneys = patiant.Kidney;
  let numberOfKidneys = patiantKidneys.length;
  let numberOfHealthyKidney = 0;
   for (let i = 0; i <patiantKidneys.length ; i++) {
       if (patiant.Kidney[i].healthy) {
          numberOfHealthyKidney = numberOfHealthyKidney +1;
       }  
    //  console.log(numberOfHealthyKidney);
      
   }
   let numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidney;

   res.json({
    numberOfKidneys,
    numberOfHealthyKidney,
    numberOfUnhealthyKidney
   })
})

// no more than 2 kidneys
 function IsLessThanTwo() {
    let lessThanTow = true;
    if (patiant.Kidney.length == 2) {
        lessThanTow = false
    }
    return lessThanTow
 }
// post

app.post("/",(req,res)=>{
  if (IsLessThanTwo()) {
    const isHealthy = req.body.isHealthy
    patiant.Kidney.push({
        healthy: isHealthy
    })

    res.json({
        msg: "new Kidney is added"
    })
  } else {
    res.status(411).json({
        msg: "NO more than 2 Kidneys"
    })
  }
})

app.listen(3001);

// put
app.put("/",(req,res)=>{
    for (let i = 0; i < patiant.Kidney.length; i++) {
        patiant.Kidney[i].healthy = true
        
    }
    res.json({
        msg: " all the Kidneys is Good"
    })
})

//delete

app.delete("/",(req,res)=>{
   if (patiant.Kidney.length ==2) {
     let AllHealthy = []
     for (let i = 0; i < patiant.Kidney.length; i++) {
       if (patiant.Kidney[i].healthy) {
        AllHealthy.push({
            healthy: true
         })
        
        }
     }
     patiant.Kidney = AllHealthy;
     res.json({
        msg: "UnHealthy Kidneys are removed"
     })
   } else {
    res.json({
        msg: "We can not remove both the Kidneys"
    })
   }
})