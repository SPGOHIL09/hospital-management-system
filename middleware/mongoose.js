/* eslint-disable no-undef */
import mongoose from "mongoose";

const connectDb = async (handler)=>{
    if(mongoose.connectios[0].readyState){
        return handler(req,res) 
    }
    await mongoose.connect(process.env.MONGO_URL)
    // eslint-disable-next-line no-undef
    return handler(req,res)
}
export default connectDb;