import mongoose from "mongoose";

const ConnectToDb = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL); 
    console.log(`MongoDB connected`); 
        
    } catch (error) {
        console.log("mongodb error : ", error); 
        process.exit(1);
    }

}
export default ConnectToDb ;