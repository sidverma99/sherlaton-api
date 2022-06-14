import express from "express"
import { createRoom, deleteRoom, getAll, getRoom, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyTokens.js";


const router=express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:id", verifyAdmin, updateRoom);

router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//getAll
router.get("/", getAll);

//get
router.get("/:id",getRoom);

export default router;