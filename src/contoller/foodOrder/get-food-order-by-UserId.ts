import { Request, Response } from "express";
import { FoodOrder } from "../../model/food-order-model";

export const getFoodOrderByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const response = await FoodOrder.find({ userId:userId }).populate({ //findOne vs find
      path:"foodOrderItems",
      populate:{
        path:"food"
      }
    });
    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};