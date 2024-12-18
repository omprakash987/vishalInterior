import mongoose from 'mongoose'

const bedroomSchema = new mongoose.Schema({
    text:{
        type:String,

    },
    img:{
        type:String,
    }
},{timestamps:true}); 

const Bedroom = mongoose.model('Bedroom',bedroomSchema);
export default Bedroom;