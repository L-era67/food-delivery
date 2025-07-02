import express, { Request, Response } from "express";
import { createFood } from "../contoller/food/create-food";
import { getFood } from "../contoller/food/get-food";
import { getFoodById } from "../contoller/food/get-food-byId";
import { deleteFoodByid } from "../contoller/food/delete-food-byId";
import { updateFood } from "../contoller/food/update-food-byId";
import { getFoodsWithCategories } from "../contoller/food/getFoodsWithCategories";


const food = express.Router();

food.get("/getFoodsWithCategories", getFoodsWithCategories)

food.post("/", createFood);

food.get("/", getFood);

food.get("/:foodId", getFoodById);

food.delete("/:foodId", deleteFoodByid);

food.put("/:foodId", updateFood);

export default food;