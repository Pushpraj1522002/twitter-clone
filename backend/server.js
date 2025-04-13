import express from "express";
import dotenv from 'dotenv';
import authRouter from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

/* app.get("/", (req, res)=>{
    res.send("server is ready");
}) */

// console.log(process.env.MONGO_URI)

app.use('/api/auth', authRouter)

app.listen(PORT, () =>{
    console.log(`Server is runing on port ${PORT}`)
    connectMongoDB();
})