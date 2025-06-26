import { Request, Response } from "express";
import { Food } from "../../model/food-model";

export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { foodName, price, image, ingredients, categoryId } = req.body;

  try {
    const response = await Food.findByIdAndUpdate(foodId, {
      foodName,
      price,
      image,
      ingredients,
      categoryId,
    });
    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};