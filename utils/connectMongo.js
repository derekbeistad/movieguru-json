import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI);

export default connectMongo;
