import { model, Schema } from "mongoose";

const categoryFoodSchema = new Schema(
  { categoryName: { type: String, default: require } },
  { timestamps: true }
);

const FoodCategory = model("Foodcategory", categoryFoodSchema); //ene nereer ni database dotor COLLECTION UUSCH BAIGAA TIIMEES uuniig duudaj find hiine <3

export default FoodCategory;
