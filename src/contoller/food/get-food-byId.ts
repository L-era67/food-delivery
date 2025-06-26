import { Request, Response } from "express";
import { Food } from "../../model/food-model";

export const getFoodById = async(req:Request, res:Response)=>{
    const {foodId} = req.params;

    try {
        const response = await Food.findById(foodId).populate("categoryId");
        res.send({ succes: true, response });
    } catch (error) {
        res.status(400).send({ success: false, message: "error" });
    }
}