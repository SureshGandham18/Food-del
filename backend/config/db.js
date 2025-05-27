import mongoose from "mongoose";

export const connectDB = async () =>{
    
    await mongoose.connect(process.env.CONN_STRING).then(()=>console.log('DB Connected'))
}