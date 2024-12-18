import express from 'express'
import ConnectToDb from './db/ConnectToDb.js'
import dotenv from 'dotenv'
import postRoutes from './routes/post.route.js'
import {v2 as cloudinary} from 'cloudinary'; 
import emailRoutes from './routes/email.route.js';
import path from 'path';


const app = express();
const PORT = process.env.PORT || 5000
const __dirname = path.resolve(); 

dotenv.config()
console.log("cloudname : ", process.env.CLOUDINARY_CLOUD_NAME)

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({limit:"5mb"})); 
app.use(express.urlencoded({extended:true})); 



app.use('/api/post',postRoutes)
app.use('/api/email',emailRoutes); 

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html")); 
})


app.listen(PORT,()=>{
    ConnectToDb();
    console.log(`Server is running on port ${PORT}`)
})
