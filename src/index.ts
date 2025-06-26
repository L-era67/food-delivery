import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose, { model, Schema } from "mongoose";
import { connectDb } from "./database/database";
import foodCategory from "./router/food-category-router";
import food from "./router/food-router";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/category", foodCategory);
app.use("/food", food);


app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
