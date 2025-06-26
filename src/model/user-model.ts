import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    // role:{},
    orderedFoods: { type: [Schema.Types.ObjectId], required: true },
    ttl: { type: Date, required: true },
    isVerified: { type: Boolean, required: true },
  },

  { timestamps: true }
);

export const User = model("User", userSchema);
