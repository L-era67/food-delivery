import express, {Request, Response} from "express";
import { categoryFoodSchemaType, FoodCategory } from "../../model/category-food-model";

export const createFoodCategory =async (req: Request, res: Response) => {
  const { categoryName } :categoryFoodSchemaType = req.body;
  console.log("BODY:", req.body);
  
  try {
    const response =await new FoodCategory({
      categoryName: categoryName,
    }).save();
console.log("back post cats", response);

  //  response.save();
    
    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "Error!" });
    console.log(error);
  }
}