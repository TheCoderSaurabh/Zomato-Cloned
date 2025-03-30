// const { required } = require("joi");
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    _id:Schema.Types.ObjectId,
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String}
})

export default model('user', userSchema);