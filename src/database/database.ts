// import { Db, MongoClient, ObjectId } from "mongodb";
import "dotenv/config";
import mongoose from "mongoose";

// const url = process.env.MONGO_URI!;
// export let db: Db;
// export const connectDb = async () => {
//   try {
//     const client = new MongoClient(url);
//     await client.connect();
//     db = client.db("food-delivery");
//     console.log("Database Connected");
//     return client;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };


const url = process.env.MONGO_URI!;

export const connectDb = async () => {
  try {
    mongoose.connect(url).then(() => console.log("dataBase"));
  } catch (error) {
    return error;
  }
};
