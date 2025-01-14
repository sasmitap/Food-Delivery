import express from "express"
import authMiddleware from '../middleware/auth.js'
import { placeOrder } from "../controllers/orderController.js"
// ,  verifyOrder, userOrders


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
// orderRouter.post("/verify", verifyOrder)
// orderRouter.post("/userorders", authMiddleware, userOrders)

export default orderRouter;