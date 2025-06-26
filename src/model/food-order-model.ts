import { model, Schema } from "mongoose";

const foodOrderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: String, required: true },
    // foodOrderItems: { type: [foodCategoryItem], required: true }, FOODCATEGORY GEJ UUSGEH YUM BAINA LDAA TER NI ODOO MODEL BISH FOOD-S L OBJECTID AWAH NI TUUNIIG ARRAY-RII CHIHEH YUM BHDAA????
    // status:enum?
  },
  { timestamps: true }
);

export const FoodOrder = model("FoodOrder", foodOrderSchema);
