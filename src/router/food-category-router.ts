import express, { Request, Response } from "express";
import { createFoodCategory } from "../contoller/foodCategory/create-food-category";
import { getFoodCategories } from "../contoller/foodCategory/category-get-food";
import { categoryDeleteFood } from "../contoller/foodCategory/category-delete-food-byId";
import { categoryFoodGetById } from "../contoller/foodCategory/category-get-by-Id";
import { createFoodUpdate } from "../contoller/foodCategory/category-food-update";

const foodCategory = express.Router();

foodCategory.post("/", createFoodCategory);

foodCategory.get("/", getFoodCategories);

foodCategory.delete("/:id", categoryDeleteFood);

foodCategory.get("/:id", categoryFoodGetById);

foodCategory.put("/:id", createFoodUpdate);

export default foodCategory;
