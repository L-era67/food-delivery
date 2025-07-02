import { Request, Response } from "express";
import { Food } from "../../model/food-model";

export const getFoodsWithCategories = async (req: Request, res: Response) => {
  try {
    const response = await Food.aggregate([
      {
        $lookup: {
          from: "foodcategories",
          localField: "categoryId",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },

      {
        $unwind: "$categoryDetails",
      },

      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: {
            $first: "$categoryDetails.categoryName",
          },
          foods: {
            $push: {
              _id: "$_id",
              foodName: "$foodName",
              price: "$price",
              image: "$image",
              ingredients: "$ingredients",
            },
          },
        },
      },
      
    ]);

    console.log("LOOK UP:", response);

    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
