import { model, Schema } from "mongoose";

const foodSchema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Foodcategory",
      required: true,
    },
  },

  { timestamps: true }
);

export const Food = model("Food", foodSchema);
