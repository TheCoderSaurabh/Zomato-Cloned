import RestroDetail from "../models/restroSchema.js";

export const createRestro = async (req, res) => {
  try {
    const { name, location, description } = req.body;

    const restroDetail = new RestroDetail({
      name,
      location,
      description,
    });

    const result = await restroDetail.save();
    return res.status(201).json({ restroData : result });
  } catch (error) {
    return res.status(400).json({ msg: "server error" });
  }
}

export const getRestro = async (req, res) => {
  try {
    // ? function to fetch query
    const {name, location} = req.query;

    const result = await RestroDetail.find({location});

    return res.status(200).json({ newFood : result });
  } catch (error) {
    return res.status(400).json({ msg: "server error" });
  }
}

// get restro by id
export const getRestroById = async (req, res) => {
  try {
    const location = req.params.id;
    const result = await RestroDetail.findOne({location}).exec();


    return res.status(200).json({ data:result });
  } catch (error) {
    return res.status(400).json({ msg: "server error" });
  }
}
