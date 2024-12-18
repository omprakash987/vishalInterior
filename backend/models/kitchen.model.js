import mongoose from 'mongoose'

const kitchenSchema = new mongoose.Schema({
    text:{
        type:String,

    },
    img:{
        type:String,
    }
},{timestamps:true}); 

const kitchen = mongoose.model('kitchen',kitchenSchema);
export default kitchen;