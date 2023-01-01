import { Schema, model, models } from "mongoose";

const showSchema = new Schema({
  title: String,
  description: String,
  image: String,
  mainCategory: String,
  type: String
});

const Show = models.Show || model("Show", showSchema);

export default Show;
