import { Request, Response } from "express";
import { FoodOrder, FoodOrderItemType } from "../../model/food-order-model";

type foodItemOrderType = {
  foodOrderItems: FoodOrderItemType[];
  totalPrice:number;
};

export const createFoodOrder = async (req: Request, res: Response) => {
  const { foodOrderItems, totalPrice }: foodItemOrderType = req.body;
  console.log(foodOrderItems);

  try {
    const response = new FoodOrder({ foodOrderItems, totalPrice });

    await response.save();
    console.log("FOODORDER ITEMS:", response);

    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
