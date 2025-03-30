import { Schema, model } from "mongoose";

const restroDetail = new Schema({
    name:{type:String},
    location:{type:String},
    description:{type:String},
})

//                    mongodb file name
export default model('restroDetail', restroDetail);