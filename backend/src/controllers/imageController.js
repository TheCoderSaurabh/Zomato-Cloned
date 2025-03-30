import images from '../models/imageModel.js'

export const createImage = async (req, res) => {
    try {
        const{data} = req.body;
        const result = await images.create(data);
        result.save();
        return result.status(201).json({ msg : "new image uploaded"});
    } catch (error) {
        return res.status(409).json({ msg : error.message });
    }
}
export const getImage = async (req, res) => {
    try {
        const{data} = req.body;
        const result = await images.create(data);
        result.save();
        return result.status(201).json({ msg : "new image uploaded"});
    } catch (error) {
        return res.status(409).json({ msg : error.message });
    }
}