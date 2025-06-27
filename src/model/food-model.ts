import { model, Schema } from "mongoose";


export type FoodSchemaType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  categoryId: Schema.Types.ObjectId;
};

const foodSchema = new Schema<FoodSchemaType>(
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

export const Food = model<FoodSchemaType>("Food", foodSchema);
