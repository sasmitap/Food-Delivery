import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:14012022@cluster0.h2sbel5.mongodb.net/MERN-Food-Delivery')
    .then(()=> console.log("DB Connected"));
}