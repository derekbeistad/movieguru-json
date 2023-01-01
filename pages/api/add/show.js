import connectMongo from "../../../utils/connectMongo";
import Show from "../../../models/showModel";

export default async function addShow(req, res) {
  try {
    const { _id, title, description, image, mainCategory, type } = req.body;

    // connect to Database
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    // create new show entry
    console.log("Creating Document");
    const show = await Show.create(req.body);
    console.log("Created Document");
    res.json({ show });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
