import { Request, Response } from "express"
import { User } from "../../model/user-model";
import { FoodOrder } from "../../model/food-order-model";

export const getFoodorders = async(req:Request, res:Response)=>{
    try {
        const response = await FoodOrder.find();
        res.send({success:true, response});
    } catch (error) {
        res.status(400).send({ success: false, message: "error" });
    }
}