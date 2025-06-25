import express from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory)

export default foodCategoryRouter;