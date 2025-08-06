import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import { storage } from '../utils/cloudinary.js'; // ✅ import Cloudinary storage

const foodRouter = express.Router();
const upload = multer({ storage: storage });
// ✅ using cloudinary now

foodRouter.get("/list", listFood);
foodRouter.post("/add", upload.single('image'), addFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
