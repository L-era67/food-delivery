import express, { Request, Response } from "express";
import { FoodCategory } from "../../model/category-food-model";

export const categoryFoodGetById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await FoodCategory.findById(id);
    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};



// const student = {
//   name: "bold",
//   age: 12,
//   callGroup: {
//     id: 1,
//     name: "10A",
//   },
// };

// student.callGroup.name

// const student2 = {
//   name: "bold",
//   age: 12,
//   callGroup: {
//     id: 1,
//     name: "10A",
//   },
//   callGroupId: 1,
// };

//ESWEL INGEWEL HYLBAR

// const student = {
//   name: "bold",
//   age: 12,
//   callGroupId: 1,
// };

// const student = {
//   name: "bold",
//   age: 12,
//   callGroup: {
//     id: 1,
//     name: "10A",
//   },
// };

// const classGroup = {
//   id: 1,
//   name: "10B",
// };
