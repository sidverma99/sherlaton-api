import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getAll, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyTokens.js";


const router=express.Router();

//create
router.post("/", verifyAdmin, createHotel);

//update
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//getAll
router.get("/", getAll);

//get
router.get("/find/:id",getHotel);

router.get("/countByCity",countByCity);

router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);

export default router;