import express, { Request, Response } from "express";
import "dotenv/config";
import cors from 'cors';
 
 
import { connectDb } from "./database/database";
import foodCategory from "./router/food-category-router";
import food from "./router/food-router";
import foodOrder from "./router/food-order-router";
import user from "./router/user-router";
 
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors())
 
app.use("/category", foodCategory);
app.use("/food", food);
app.use("/food-order", foodOrder);
app.use("/user", user);
 
 
app.get("/",(req:Request, res:Response)=>{
  res.send("Food delivery web");
})
 
app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
