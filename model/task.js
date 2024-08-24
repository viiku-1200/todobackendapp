import mongoose from "mongoose"

const schema= new mongoose.Schema({
    
    tittle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true

    },
    createAt:{
        type:Date,
        default:Date.now
    }
})


 export const Task= mongoose.model("Task",schema)