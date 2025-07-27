import { Schema, model } from "mongoose";

const foodDetails = new Schema({
    name:{type:String},
    restuarant_id:{type:String},
    price:{type:String}
})

//                    mongodb file name
export default model('foodDetail', foodDetails);