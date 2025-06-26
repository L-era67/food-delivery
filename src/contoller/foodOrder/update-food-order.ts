import { Request, Response } from "express";
import { FoodOrder } from "../../model/food-order-model";

export const updateFoodOrder = async (req: Request, res: Response) => {
  const { foodOrderId } = req.params;
  const { userId, totalPrice } = req.body;
  try {
    const response = await FoodOrder.findByIdAndUpdate(foodOrderId, {userId, totalPrice});
    res.send({success:true, response});
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
