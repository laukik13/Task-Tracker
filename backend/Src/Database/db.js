import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async()=>{

    try {

       const connectInstance =  await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
       console.log(`MongoDB is Connected !!! ${connectInstance.connection.host}`);

    } catch (error) {
        
        console.log(`MongoDB is Not Connected !!! ${error}`);
        process.exit(1);
    }

}

export {connectDB}