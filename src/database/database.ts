import mongoose from "mongoose";
import "dotenv/config";


const url = process.env.MONGO_URI!;

export const connectDb = async () => {
  try {
    mongoose.connect(url).then(() => console.log("database connected"));
  } catch (error) {
    console.log(error);
    return error;
  }
};