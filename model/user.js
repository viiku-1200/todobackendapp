import mongoose from "mongoose"

const schema= new mongoose.Schema({
    
    password:{
        type:String,
        
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})


 export const User= mongoose.model("User",schema)