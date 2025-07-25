import { model, Schema } from "mongoose";

enum UserRoleEnum {
  USER = "User",
  ADMIN = "Admin",
}

type userSchemaType = {
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  orderedFoods: Schema.Types.ObjectId[];
  // ttl: Date;
  isVerified: boolean;
  role: string;
};

const userSchema = new Schema<userSchemaType>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(UserRoleEnum),
      default: UserRoleEnum.USER,
    },
    // orderedFoods: {
    //   type: [Schema.Types.ObjectId],
    //   ref: "FoodOrder",
    //   require: true,
    // },
    // ttl: { type: Date, required: true },
    isVerified: { type: Boolean, require: true },
  },

  { timestamps: true }
);

export const User = model<userSchemaType>("User", userSchema);
