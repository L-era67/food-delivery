import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../model/user-model";

export const getCurrentUser = async (req: Request, res: Response) => {

  const authHeader = req.headers.authorization;
  console.log("authHeader: ", authHeader);

  const tokenToString = authHeader?.split(" ")[1] || "";
  console.log("tokenTostring:", tokenToString);

  try {
    const secret = "WTF-SECRET-PASSWORD";
    
    const isVerified = jwt.verify(tokenToString, secret) as jwt.JwtPayload;
    console.log("isVerified: ", isVerified?.userData);

    if (!isVerified) {
      throw new Error("User not found");
    }

    const userDetail = await User.findById(isVerified.userData.userId);
    console.log("userDetail: ", userDetail);

    res.status(200).json({ user: userDetail });
  } catch (error) {
    console.log(error);
    res.status(400).send("user not found");
  }
};
