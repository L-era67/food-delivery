import { FoodOrder } from "../../model/food-order-model"
import { Request, Response } from "express";

export const deleteOrder = async(req:Request, res:Response)=>{
    const {orderId} = req.params;
    try {
    
        const response = await FoodOrder.findByIdAndDelete(orderId);
        res.status(200).send({success:true, response});
    } catch (error) {
        res.status(400).send({ success: false, message: "error" });
    }
}