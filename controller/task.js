import { Task } from "../model/task.js"




export const newTask=async(req,res,next)=>{
const{tittle,description}=req.body
 await Task.create({tittle,description,user:req.user})
 res.status(202).json({
    success:true,
    message:"Task Created Successfully"
 })
}

export const myTask=async(req,res,next)=>{
    const userid=req.user._id
    const task=await Task.find({
        user:userid
    })
    res.status(202).json({
        success:true,
        task
    })
    }

    export const updatetask=async(req,res,next)=>{
       const {id}=req.params
       const task=await Task.findById(id)
       task.isCompleted=!task.isCompleted

       await task.save()
        res.status(202).json({
            success:true,
            message:"task updated"
        })
        }

        export const deletetask=async(req,res,next)=>{
            const {id}=req.params
       const task=await Task.findById(id)
       if(!task){
        return res.status(404).json({
            success:false,
            message:"Invalid task"
        })
       }
       

       await task.deleteOne()
        res.status(202).json({
            success:true,
            message:"task deleted"
        })
            }