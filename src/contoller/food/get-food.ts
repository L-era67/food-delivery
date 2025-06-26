import  { Request, Response } from "express";
import { Food } from "../../model/food-model";

export const getFood = async (req: Request, res: Response) => {
  try {
    const response = await Food.find().populate("categoryId");
    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
