import { Request, Response } from "express"
import { FoodOrder, FoodOrderItemType } from "../../model/food-order-model";

type foodItemOrderType = {
    foodOrderItems: FoodOrderItemType[];
}

export const createFoodOrder = async(req:Request, res:Response)=>{
    const {foodOrderItems}:foodItemOrderType  =req.body;

    try {
        const response =new FoodOrder({foodOrderItems});

        await response.save();
        
        res.status(200).send({success:true, response});
    } catch (error) {                                               
        res.status(400).send({ success: false, message: "error" });
    }
}