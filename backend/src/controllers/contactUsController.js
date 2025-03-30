import ContactUs from "../models/contactUs.js";

export const createContact = async (req, res) => {
  try {
    // const { id } = req.params;
    const { name, email, message } = req.body;

    const contactData = new ContactUs({
    //   _id: id,
      name,
      email,
      message,
    });

    const result = await contactData.save();
    return res.status(201).json({ newUser: result });
  } catch (error) {
    return res.status(400).json({ msg: "server error" });
  }
};
