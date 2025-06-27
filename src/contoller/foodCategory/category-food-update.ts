import express, { Request, Response } from "express";
import { FoodCategory } from "../../model/category-food-model";

export const createFoodUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {categoryName} =req.body;

  try {
    const response = await FoodCategory.findByIdAndUpdate(id, {categoryName:categoryName});
    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
