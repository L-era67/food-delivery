import express, { Request, Response } from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/food.category.router";
// import { connectDb, db } from "./database/database";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/category", foodCategoryRouter)

// app.post("/", async (req: Request, res: Response) => {
//   const { food } = req.body;
//   const response = await db.collection("food").insertOne({ food });
//   res.json(response);
//   // res.send("Hello Bolormaa ~L")
// });

// app.get("/", async (req: Request, res: Response) => {
//   const response =await db.collection("food").find().toArray();
//   res.json(response);
//   // res.send("Hello Bolormaa ~L")
// });

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
