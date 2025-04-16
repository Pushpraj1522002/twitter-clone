import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

/* app.get("/", (req, res)=>{
    res.send("server is ready");
}) */

// console.log(process.env.MONGO_URI)

app.use(express.json()); //to parse req.body
app.use(express.urlencoded({extended:true})); //to parse url data (urlencoded)

app.use(cookieParser()); // in middleware protectRoute to parse the cookie for authentication of other function rather than logout/login/signin

app.use('/api/auth', authRoutes)

app.listen(PORT, () =>{
    console.log(`Server is runing on port ${PORT}`)
    connectMongoDB();
})