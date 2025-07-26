import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../model/user-model";

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("authHeader: ", authHeader);

    if(!authHeader || !authHeader.startsWith("Bearer ")){
      res.status(401).json({message:"Autherization token is required."});
      return;
    }

    const tokenToString = authHeader?.split(" ")[1] || "";

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
