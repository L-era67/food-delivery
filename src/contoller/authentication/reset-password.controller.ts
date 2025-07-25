import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../model/user-model";
import bcrypt from "bcrypt";

export const resetPassword = async (req: Request, res: Response) => {
  const { resetPassword, token } = req.body;
  // const authHeaderToke = req.headers.authorization
  // console.log("authHeaderToke", authHeaderToken);
  const tokenReset = token || "";

  const resetPasswordHash = await bcrypt.hash(resetPassword, 10);

  try {
    const secret = "WTF-SECRET-PASSWORD";
    const isVeryfied = jwt.verify(tokenReset, secret) as jwt.JwtPayload;

    console.log("isVeryfied", isVeryfied.userData);

    if (!isVeryfied) {
      throw new Error("User not found");
    }

    const resetUserDetail = await User.findByIdAndUpdate(
      isVeryfied?.userData?.userId,
      { password: resetPasswordHash }
    );

    if(!resetUserDetail){
        res.status(400).send("user no found");
        return;
    }

    console.log("resetUserDetail", resetUserDetail);

    res.status(200).json({ resetUserDetail});
  } catch (error) {
    console.log("reset password", error);
  }
};
