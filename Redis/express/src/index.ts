import express from 'express'
import {createClient} from 'redis'



const app = express();
app.use(express.json());

const client = createClient();
client.connect()


app.post("/submit", async (req, res) => {
    const {problem, userId , code, language} = req.body;
    try {
        await client.lPush("submission", JSON.stringify({problem, userId, code, language}))
        res.json({
            message: "Submittion received"
        })
    } catch (error) {
        res.json({
            message: "Submission failed :("
        })
    }
});

app.listen(3000)