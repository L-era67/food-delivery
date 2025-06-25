import { model, Schema } from "mongoose";

const foodCategotySchema = new Schema({
  categoryName: { type: String, require: true },
  // createdAt: { Type: Date, default: Date.now() },
  // updatedAt: { Type: Date, default: Date.now() },
});

const FoodCategory = model("FoodCategory", foodCategotySchema);

export default FoodCategory;
