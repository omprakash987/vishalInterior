import mongoose from 'mongoose'

const livingRoomSchema = new mongoose.Schema({
    text:{
        type:String,

    },
    img:{
        type:String,
    }
},{timestamps:true}); 

const LivingRoom = mongoose.model('LivingRoom',livingRoomSchema);
export default LivingRoom;