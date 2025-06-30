import { model, Schema } from "mongoose";
import { FoodSchemaType } from "./food-model";

enum orderStatus {
  PENDING = "Pending",
  CANCELED = "Canceled",
  DELIVERED = "Delivered",
}
//ENUM TUHAIN DATA-D BAIH HEREGTEI URDCHILSAN LIMITTEI TOGTSON DATA-G AGUULJ OBJECT BUTSAADAG

// console.log("status ENUM: OBJECT", Object(orderStatus));
// console.log("ZUWHUN VALUE-G NI AWAH NI:", Object.values(orderStatus));
// console.log("VALUE AWAH 2 index-r awch baina:", orderStatus.CANCELED);

export type FoodOrderItemType = {
  food: FoodSchemaType; //tsaanaa id-r damjij i
  quantity: number; //Number gej bichher calculate(foodorderitem.quatity err)
  price: number;
};

const orderItemSchema = new Schema<FoodOrderItemType>(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
    price: {type:Number, required:true}
  },
  { _id: false }
);

const foodOrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", require: true }, //UUNIIG SHUUD PARAM BODY BISH "JSON TOKEN" BOLGOJ AWAAD TUUNIIG TAILJ UNSHIN
    totalPrice: { type: Number, require: true }, // API-S PRICE AWAAD NEMEH NI ERSDELTEI UCHIR BUH ORDER ITEM IRSNII DARAA NIIT TOTALPRICE BODOJ GARGAH HEREGETEI
    status: {
      type: String,
      enum: Object.values(orderStatus),
      default: orderStatus.PENDING,
    },
    foodOrderItems: [{ type: orderItemSchema, require: true }],
  },
  { timestamps: true }
);

export const FoodOrder = model("FoodOrder", foodOrderSchema);
