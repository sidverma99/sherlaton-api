import express from "express"
import { createUser, updateUser, deleteUser, getAll, getUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyTokens.js";

const router=express.Router();

//router.get("/checkauth", verifyToken, (req,res,next)=>{
//    res.send("Hello user you are authenticated")
//});

//router.get("/checkUser/:id",verifyUser, (req,res,next)=>{
//    res.send("Hello user you are logged in and you can delete your account");
//});

//router.get("/checkAdmin/:id",verifyAdmin, (req,res,next)=>{
//    res.send("Hello user you are admin and you can delete all account");
//});

//create
router.post("/", createUser);

//update
router.put("/:id",verifyUser,updateUser);

//delete
router.delete("/:id",verifyUser,deleteUser);

//getAll
router.get("/" ,verifyAdmin, getAll);

//get
router.get("/:id", verifyUser, getUser);

export default router;