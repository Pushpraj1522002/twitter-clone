import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js"

import connectMongoDB from "./db/connectMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


/* app.get("/", (req, res)=>{
    res.send("server is ready");
}) */

// console.log(process.env.MONGO_URI)

app.use(express.json()); //to parse req.body
app.use(express.urlencoded({extended:true})); //to parse url data (urlencoded)

app.use(cookieParser()); // in middleware protectRoute to parse the cookie for authentication of other function rather than logout/login/signin

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () =>{
    console.log(`Server is runing on port ${PORT}`)
    connectMongoDB();
})