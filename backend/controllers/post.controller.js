import kitchen from '../models/kitchen.model.js'
import LivingRoom from '../models/livingRoom.model.js';
import bedRoom from '../models/bedRoom.model.js';
import poojaRoom from '../models/poojaRoom.model.js';

export const createModularKitchen = async(req , res )=>{
   try {
    const {text} = req.body; 
    const {img} = req.body;

    if(!text){
        return res.status(400).json({error:"Please fill all the fields"})
    }

    if (img) {
        const uploadedResponse = await cloudinary.uploader.upload(img);
        img = uploadedResponse.secure_url;
        console.log("image : ", img);
    }

    const post = await kitchen.create({
        text,
        img
    })
    res.status(200).json({
        message:"Post created successfully",
        data:post
    })
    
   } catch (error) {
         console.log(error)
         res.status(500).json({error:"Something went wrong"})
    
   }

}
export const getModularKitchen = async(req , res )=>{
    try {
        const posts = await kitchen.find();
        res.status(200).json({
            message:"Posts fetched successfully",
            data:posts
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Something went wrong"})
    }
}

export const createLivingRoom = async(req , res )=>{
    try {
     const {text} = req.body; 
     const {img} = req.body;
 
     if(!text || !img){
         return res.status(400).json({error:"Please fill all the fields"})
     }
 
     const post = new LivingRoom({
         text,
         img
     })
     res.status(200).json({
         message:"Post created successfully",
         data:post
     })
     
    } catch (error) {
          console.log(error)
          res.status(500).json({error:"Something went wrong"})
     
    }
 }

export const getLivingRoom = async(req , res )=>{
        try {
            const posts = await LivingRoom.find();
            res.status(200).json({
                message:"Posts fetched successfully",
                data:posts
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({error:"Something went wrong"})
        }
    }

export const createBedRoom = async(req , res )=>{
        try {
         const {text} = req.body; 
         const {img} = req.body;
     
         if(!text || !img){
             return res.status(400).json({error:"Please fill all the fields"})
         }
     
         const post = new bedRoom({
             text,
             img
         })
         res.status(200).json({
             message:"Post created successfully",
             data:post
         })
         
        } catch (error) {
              console.log(error)
              res.status(500).json({error:"Something went wrong"})
         
        }
     }

export const getBedRoom = async(req , res )=>{
            try {
                const posts = await bedRoom.find();
                res.status(200).json({
                    message:"Posts fetched successfully",
                    data:posts
                })
            } catch (error) {
                console.log(error)
                res.status(500).json({error:"Something went wrong"})
            }
        }

export const createpoojaRoom = async(req , res )=>{
            try {
             const {text} = req.body; 
             const {img} = req.body;
         
             if(!text || !img){
                 return res.status(400).json({error:"Please fill all the fields"})
             }
         
             const post = new poojaRoom({
                 text,
                 img
             })
             res.status(200).json({
                 message:"Post created successfully",
                 data:post
             })
             
            } catch (error) {
                  console.log(error)
                  res.status(500).json({error:"Something went wrong"})
             
            }
         }


export const getpoojaRoom = async(req , res )=>{
                try {
                    const posts = await poojaRoom.find();
                    res.status(200).json({
                        message:"Posts fetched successfully",
                        data:posts
                    })
                } catch (error) {
                    console.log(error)
                    res.status(500).json({error:"Something went wrong"})
                }
            }