// to create food db in mongodb
import mongoose from "mongoose";

// schema used for where we can describe food model properties
const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

// using schema we can create model
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

// export model
export default foodModel;