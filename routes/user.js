import  express from "express"
import { User } from "../model/user.js"
import {   getAlluserDetail, getSingleUser, log, logout, register } from "../controller/user.js"
import { isAuthenticated } from "../middleware/auth.js"

const router= express.Router()





router.get("/all",getAlluserDetail)


router.post("/new",register)
router.post("/login",log)

router.get("/logout",logout)
router.get("/single",isAuthenticated,getSingleUser)

export default router

