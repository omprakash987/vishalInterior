import { Router } from "express";
import { 
    createModularKitchen,
    getModularKitchen,
    createLivingRoom,
    getLivingRoom,
    createBedRoom,
    getBedRoom,
    createpoojaRoom,
    getpoojaRoom
 } from "../controllers/post.controller.js";



const router = Router(); 

router.post('/modular-kitchen',createModularKitchen);
router.get('/modular-kitchen',getModularKitchen);
router.post('/livingRoom',createLivingRoom);
router.get('/livingRoom',getLivingRoom);
router.post('/bedRoom',createBedRoom);
router.get('/bedRoom',getBedRoom);
router.post('/poojaRoom',createpoojaRoom);
router.get('/poojaRoom',getpoojaRoom);


export default router;