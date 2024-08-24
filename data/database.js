import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.MONGOURL,{dbName:"todo"}).then((c)=>console.log(`database is connected ${c.connection.host}`))
}