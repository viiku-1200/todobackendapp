import { User } from "../model/user.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../utility/feature.js"



export const getSingleUser =async(req,res)=>{
    

    
   
   res.json({
    success:true,
    user:req.user
   })

}
export const logout=(req,res)=>{
    res. status(200).cookie("token","",{
        httpOnly:true,
        expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true
    }).json({
        success:true,
        
       })
    
}

export const log=async(req,res)=>{
    const{email,password}=req.body
    let user=await User.findOne({email})
    if(!user){
        res.json({
            success:false,
            message:"Invalid email "
        })
    }
    let isMatched=bcrypt.compare(password,user.password)
    if(! isMatched){
        res.json({
            success:false,
            message:" Invalid password"
        })
    }
    

    
sendCookie(user,res,"login successfully")
}


export const register=async(req,res)=>{
    const{name,email,password}=req.body
    let user=await User.findOne({email})
    if(user) {
         res.json({
            success:false,
            message:"already exist"
        })
    }

    
    const hashPass= await bcrypt.hash(password,10)
   user= await User.create({
        name,
        email,
        password:hashPass
    })

    sendCookie(user,res,"registered succesfully")

}



export const getAlluserDetail=async(req,res)=>{
    
    const user= await User.find({})
    console.log(user)
    res.json({
     success:true,
     user
    })
 
 }