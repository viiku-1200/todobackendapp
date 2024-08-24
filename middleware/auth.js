import { User } from "../model/user.js"
import jwt from "jsonwebtoken"

export const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies
    
    if(!token){
        return res.status(404).json({
            success:false,
            message:"login first"
        })
    } else{
        let decoded=jwt.verify(token,process.env.TSECRET)
        req.user=await User.findById(decoded._id)
    }

   
    next()


}