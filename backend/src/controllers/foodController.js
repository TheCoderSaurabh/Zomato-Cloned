import FoodDetail from "../models/foodSchema.js";

export const createFood = async (req, res) => {
  try {
    const { name, restuarant_id, price } = req.body;

    const foodDetail = new FoodDetail({
      name,
      restuarant_id,
      price,
    });

    const result = await foodDetail.save();
    return res.status(201).json({ newFood : result });
  } catch (error) {
    return res.status(400).json({ msg: "server error" });
  }
};
export const getFood = async (req, res) => {
  try {
    const result = await FoodDetail.find();
    return res.status(200).json({ newFood : result });
  } catch (error) {
    return res.status(400).json({ msg: "server error" });
  }
};
