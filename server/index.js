import express from 'express';
import { config } from 'dotenv';
import connectTODb from './config/ConnectionTODb.js';
import userroutes from './router/user.router.js';
import taskRoute from './router/task.route.js'

config();

const app = express();
app.use(express.json());

app.use("/api/v1/user",userroutes)
app.use("/api/v1/task",taskRoute)


app.all("*",(req,res)=>{
    res.send("page not found")
})
console.log(process.env.PORT)

app.listen(process.env.PORT || 3031, async()=>{
    await connectTODb(process.env.DATABASE_URL) 
    console.log(`server is running on port: http://localhost:${process.env.PORT}`)
    
})