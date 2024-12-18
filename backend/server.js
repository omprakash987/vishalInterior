import express from 'express'
import ConnectToDb from './db/ConnectToDb.js'
import dotenv from 'dotenv'
import postRoutes from './routes/post.route.js'

const app = express(); 

dotenv.config()

app.use(express.json({limit:"5mb"})); 
app.use(express.urlencoded({extended:true})); 



app.get("/",(req,res)=>{
    res.send("Server is ready")
})
app.use('/api/post',postRoutes)
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    ConnectToDb();
    console.log(`Server is running on port ${PORT}`)
})
