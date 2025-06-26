import express from "express";
import { createFoodOrder } from "../contoller/foodOrder/create-food-order";
import { getFoodorders } from "../contoller/foodOrder/get-food-orders";
import { getFoodOrderById } from "../contoller/foodOrder/get-food-order-byId";
import { updateFoodOrder } from "../contoller/foodOrder/update-food-order";


const foodOrder = express.Router();

foodOrder.post("/", createFoodOrder);

foodOrder.get("/", getFoodorders);

foodOrder.get("/:userId", getFoodOrderById);

foodOrder.put("/:foodOrderId", updateFoodOrder);

export default foodOrder;