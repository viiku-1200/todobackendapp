import express from "express"
import { deletetask, myTask, newTask, updatetask } from "../controller/task.js"
import { isAuthenticated } from "../middleware/auth.js"

const tRouter=express.Router()
tRouter.post("/addtask",isAuthenticated,newTask)
tRouter.get("/gettask",isAuthenticated,myTask)
tRouter.put("/updatetask/:id",isAuthenticated,updatetask)
tRouter.delete("/deletetask/:id",isAuthenticated,deletetask)



export default tRouter