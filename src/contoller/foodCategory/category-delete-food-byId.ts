import {FoodCategory }from "../../model/category-food-model";
import express, {Request, Response} from "express";


export const categoryDeleteFood = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await FoodCategory.findByIdAndDelete(id);
    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
}