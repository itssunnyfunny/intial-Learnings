import express from 'express';
import { PORT , mongoDBURL } from './confing.js';
import mongoose from 'mongoose';

const app = express();

app.get('/',(request, response)=>{
   console.log(request);
   return response.status(234).send('Welcom to MERN stack 2.221')
   
})


mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App connected to database');
    
app.listen(PORT,()=>{
    console.log(`App is listening to port : ${PORT}`);
    
})
    
})
.catch((error)=>{
   console.log(error, "Error connecting to database");
   
})
