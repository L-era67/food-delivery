import { model, Schema } from "mongoose";


export type FoodSchemaType = {
  _id:Schema.Types.ObjectId;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  categoryId: Schema.Types.ObjectId;
};

const foodSchema = new Schema<FoodSchemaType>(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
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
