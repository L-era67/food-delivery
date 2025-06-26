import FoodCategory from "../../model/category-food-model";
import express, {Request, Response} from "express";

export const createFoodCategory =async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  try {
    const response = new FoodCategory({
      categoryName: categoryName,
    });

    await response.save();
    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "Error!" });
    console.log(error);
  }
}