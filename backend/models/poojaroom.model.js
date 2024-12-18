
import mongoose from 'mongoose'

const poojaRoomSchema = new mongoose.Schema({
    text:{
        type:String,

    },
    img:{
        type:String,
    }
},{timestamps:true}); 

const PoojaRoom = mongoose.model('Kitchen',poojaRoomSchema);
export default PoojaRoom;