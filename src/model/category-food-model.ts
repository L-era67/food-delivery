import { model, Schema } from "mongoose";

export type categoryFoodSchemaType ={
  categoryName:string
}

const categoryFoodSchema = new Schema<categoryFoodSchemaType>(
  { categoryName: { type: String, required:true } },
  { timestamps: true }
);

export const FoodCategory = model<categoryFoodSchemaType>("Foodcategory", categoryFoodSchema); //ene nereer ni database dotor COLLECTION UUSCH BAIGAA TIIMEES uuniig duudaj find hiine <3
