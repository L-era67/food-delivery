import { Request, Response } from "express"
import { FoodOrder } from "../../model/food-order-model";

export const createFoodOrder = async(req:Request, res:Response)=>{
    const {userId, totalPrice}  =req.body;

    try {
        const response =new FoodOrder({
            userId,
            totalPrice,
        });

        await response.save();
        
        res.status(200).send({success:true, response});
    } catch (error) {
        res.status(400).send({ success: false, message: "error" });
    }
}