import express, { Request, Response } from "express";
import "dotenv/config";
import mongoose, { model, Schema } from "mongoose";

const app = express();
const port = 3000;

app.use(express.json());

const url = process.env.MONGO_URI!;

const connectDb = async () => {
  try {
    mongoose.connect(url).then(() => console.log("database connected"));
  } catch (error) {
    console.log(error);
    return error;
  }
};

const categoryFoodSchema = new Schema(
  { categoryName: { type: String, default: require } },
  { timestamps: true }
);

const FoodCategory = model("Foodcategory", categoryFoodSchema); //ene nereer ni database dotor COLLECTION UUSCH BAIGAA TIIMEES uuniig duudaj find hiine <3

app.post("/", async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  try {
    const response = new FoodCategory({
      categoryName: categoryName,
    });

    await response.save();
    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "Error!" });
    console.log(error);
  }
});

app.get("/", async (req: Request, res: Response) => {
  try {
    const response = await FoodCategory.find();
    res.send({ success: true, response });
  } catch (error) {}
});

app.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await FoodCategory.deleteOne({ _id: id });
    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
});

app.put("/", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { categoryName } = req.body;
  try {
    const response = await FoodCategory.updateOne(
      { _id: id },
      { categoryName: categoryName }
    );
    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
});

app.listen(port, async () => {
  await connectDb();
  console.log(`Example app listening on port http://localhost:${port}`);
});
