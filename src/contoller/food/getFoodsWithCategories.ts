import { Request, Response } from "express";
import { Food } from "../../model/food-model";
import { FoodCategory } from "../../model/category-food-model";

export const getFoodsWithCategories = async (req: Request, res: Response) => {
  try {
    // const response = await Food.aggregate([
    //   {
    //     $lookup: {
    //       from: "foodcategories",
    //       localField: "categoryId",
    //       foreignField: "_id",
    //       as: "categoryDetails",
    //     },
    //   },

    //   {
    //     $unwind: "$categoryDetails",
    //   },

    //   {
    //     $group: {
    //       _id: "$categoryDetails._id",
    //       categoryName: {
    //         $first: "$categoryDetails.categoryName",
    //       },
    //       foods: {
    //         $push: {
    //           _id: "$_id",
    //           foodName: "$foodName",
    //           price: "$price",
    //           image: "$image",
    //           ingredients: "$ingredients",
    //         },
    //       },
    //       // count: { $count: "foods" },
    //     },
    //   },

    //   {
    //     $project:{
    //       _id:1,
    //       categoryName:1,
    //       foods:1,
    //       count:{$size:"$foods"},
    //     }
    //   }
    // ]); // NEW CATEGORY UUSGEHED FAILDEW UULAN COUNT-AA TOOLOOD BAIGAACH UUSGEHDEE ZAAWAL FOOD ID BAIJ TUUNTEI MATCH BAIJ SHINE CATEGORY UUSGEH GEED BAIGAA BOLHOOR NEG AWTSALDAHGUI YUM BAINA. TIIMEES ESRGEER NI HIIY

    const response = await FoodCategory.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "categoryId",
          as: "categoryDetails",
        },
      },
      // {
      //   $unwind: "$categoryDetails",
      // },
      {
        $project: {
          categoryName: "$categoryName",
          foods: "$categoryDetails",
          count: { $size: "$categoryDetails" },
        },
      },
      {
        // $sort: { count: -1 },
        $sort: { categoryName: -1}, //A-Z
      },
    ]);

    res.send({ succes: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
