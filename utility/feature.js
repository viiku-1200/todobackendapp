import jwt from "jsonwebtoken"
export const sendCookie=(user,res,message)=>{
    const token= jwt.sign({_id:user._id},process.env.TSECRET)
    res.status(202).cookie("token",token,{
        httpOnly:true,
        maxAge:60*1000*15,
        sameSite:process.env.NODE_ENV==="Development"?"lax":"none",
        secure:process.env.NODE_ENV==="Development"?false:true
    }).json({
        success:true,
        message
    })
}