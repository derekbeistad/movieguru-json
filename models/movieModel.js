import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  title: String,
  description: String,
  image: String,
  mainCategory: String,
  type: String,
});

const Movie = models.Movie || model("Movie", movieSchema);

export default Movie;
