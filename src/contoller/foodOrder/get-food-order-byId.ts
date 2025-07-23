import { Request, Response } from "express";
import { FoodOrder } from "../../model/food-order-model";

export const getFoodOrderById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const response = await FoodOrder.find({ userId:userId }).populate({ //findOne vs find
      path:"foodOrderItems",
      populate:{
        path:"food"
      }
    }); //ene odoo userId -r ni awah yum bndaa tegheer Foodorder ID BISH USER ID BIZDE? 
    res.send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
