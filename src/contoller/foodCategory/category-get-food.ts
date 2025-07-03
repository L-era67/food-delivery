import express, { Request, Response } from "express";
import { FoodCategory } from "../../model/category-food-model";

export const getFoodCategories = async (req: Request, res: Response) => {
  try {
    const response = await FoodCategory.find();
    console.log("BACK CATS", response);
    
    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "Error!" });
    console.log(error);
  }
};
