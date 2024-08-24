import express from "express"
import mongoose from "mongoose"

import router from "./routes/user.js"
// import { connectDB } from "./data/database.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser"
import tRouter from "./routes/task.js"
import cors from "cors"

 export const app=express()

 app.use(express.json())//json data midddlewarekl // just above router
 app.use(cors({
    origin:[process.env.FRONTEN_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true
 }))
 app.use(cookieParser())
 config({
    path:"./data/config.env"
 })


 
app.use(router)
app.use(tRouter)



























// connectDB()

// const schema= new mongoose.Schema({
//     name:String,
//     password:String,
//     email:String,
// })


// const User= mongoose.model("User",schema)

// dynamic route sabse last m rakhe ho
// app.get("/userid/:id",async(req,res)=>{
//     const {id}=req.params
//    const user= await User.findById(id)
//    console.log(req.params)
//    res.json({
//     success:true,
//     user
//    })

// })

// app.post("/users/add",async(req,res)=>{
//     const{name,email,password}=req.body
//     await User.create({
//         name,
//         email,
//         password
//     })
// res.cookie("token","opppp").send("post success")
// })


