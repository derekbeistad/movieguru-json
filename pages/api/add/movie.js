import connectMongo from "../../../utils/connectMongo";
import Movie from "../../../models/movieModel";

export default async function addMovie(req, res) {
  try {
    const { _id, title, description, image, mainCategory, type } = req.body;

    // connect to Database
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    // Create new movie entry
    console.log("Creating Document");
    const movie = await Movie.create(req.body);
    console.log("Created Document");
    res.json({ movie });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
