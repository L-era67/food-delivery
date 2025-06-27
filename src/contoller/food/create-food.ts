import { Request, Response } from "express";
import { Food, FoodSchemaType } from "../../model/food-model";

export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, categoryId }:FoodSchemaType = req.body;
  try {
    const response = new Food({ foodName, price, image, ingredients, categoryId });

    await response.save();
    console.log("food RESPONSE", response);

    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
