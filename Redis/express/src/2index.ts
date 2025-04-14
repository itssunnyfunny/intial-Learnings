import express from 'express'
import {createClient} from 'redis'

const app = express();
 app.use(express.json());

 const client = createClient();
    client.connect()

 app.post("/try",async (req, res) => {
      const {problem,userId, code, language} = req.body; 
     
      try {
         
      const response = await client.lPush("try", JSON.stringify({problem, userId, code, language}));
            res.json({
              message: "successfully inserted redis queues"
            })
      } catch (error) {
        res.json({
            message: "Error during insersion in queue try"
        })
      }

 })

 app.listen(3001)