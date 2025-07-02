import { Request, Response } from "express";
import { FoodOrder, FoodOrderItemType } from "../../model/food-order-model";
import food from "../../router/food-router";
import { Schema } from "mongoose";
import { Food } from "../../model/food-model";
import currency from "currency.js";

type foodItemOrderType = {
  foodOrderItems: FoodOrderItemType[];
  totalPrice: number;
};

export const createFoodOrder = async (req: Request, res: Response) => {
  const { foodOrderItems }: foodItemOrderType = req.body;

  // const totalPrice = await calculateTotalPrice(foodOrderItems);

  console.log(foodOrderItems);

  try {
    const response = new FoodOrder({ foodOrderItems });

    await response.save();
    console.log("FOODORDER ITEMS:", response);

    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};

// const calculateTotalPrice = async (foodOrderItems: FoodOrderItemType[]) => {
//   const priceFoods = await Promise.all(
//     foodOrderItems.map(async (foodOrderItem) => {
//       const food = await getFoodByFoodId(foodOrderItem?.food);

//       if (!food?.price) return 0;

//       return currency(food?.price).multiply(foodOrderItem?.quantity).value;
//     })
//   );
//   const TotalPrice = priceFoods.reduce(
//     (acc, curr) => currency(acc).add(curr).value,
//     0
//   );

//   return TotalPrice;
// };

// const getFoodByFoodId = async (foodId: Schema.Types.ObjectId) => {
//   return await Food.findById(foodId);
// };
