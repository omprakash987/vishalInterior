import express from 'express'
import ConnectToDb from './db/ConnectToDb.js'
import dotenv from 'dotenv'
import postRoutes from './routes/post.route.js'
import {v2 as cloudinary} from 'cloudinary'; 
import emailRoutes from './routes/email.route.js';

const app = express(); 

dotenv.config()
console.log("cloudname : ", process.env.CLOUDINARY_CLOUD_NAME)

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({limit:"5mb"})); 
app.use(express.urlencoded({extended:true})); 



app.get("/",(req,res)=>{
    res.send("Server is ready")
})
app.use('/api/post',postRoutes)
app.use('/api/email',emailRoutes); 
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    ConnectToDb();
    console.log(`Server is running on port ${PORT}`)
})
