// jsonwebtoken:- used for authentication systems
// mongoose:- used to connect to database
// bcrypt:- used for encrypt user data and store in db
// cors:- used for to give permission to frontend to connect with backend
// dotenv:- used for we can use that environment variable in project
// body-parser:- used for parsing data from the user
// multer:-used for image store system
// stripe:-used for payment gateways in webpage
// validator:-used for check the password,email id
// nodemon:-used for when we save our project,server will restarted

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// // db connetion
connectDB();

// api end points
app.use("/api/food",foodRouter)
// access img from uploads folder and show uploaded image in frontend
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

// to run express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

