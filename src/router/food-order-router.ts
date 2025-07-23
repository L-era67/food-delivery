import express from "express";
import { createFoodOrder } from "../contoller/foodOrder/create-food-order";
import { getFoodorders } from "../contoller/foodOrder/get-food-orders";
import { getFoodOrderByUserId } from "../contoller/foodOrder/get-food-order-by-UserId";
import { updateFoodOrder } from "../contoller/foodOrder/update-food-order";
import { deleteOrder } from "../contoller/foodOrder/delete-orders";

const foodOrder = express.Router();

foodOrder.post("/", createFoodOrder);

foodOrder.get("/", getFoodorders);

foodOrder.get("/:userId", getFoodOrderByUserId);

foodOrder.put("/:foodOrderId", updateFoodOrder);

foodOrder.delete("/:orderId", deleteOrder);

export default foodOrder;
