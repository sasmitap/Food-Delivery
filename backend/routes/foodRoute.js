// to add food items from food controller, need route

import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";

import multer from "multer"

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage ({
    // we wants to store image in upload folder
    destination: "uploads",
    // cb:- callback
    filename: (req,file,cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload =  multer({storage:storage})

// add is end point
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;