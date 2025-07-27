import mongoose from 'mongoose'

const uploadImage = mongoose.Schema ({
    myFile:String
});

export default mongoose.model.images || mongoose.model('images', uploadImage)