import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkAuthRole = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization || "";

    if (!authHeader || !authHeader?.startsWith("Bearer ")) {
      res.status(400).json({ success: false });
    }

    const authToken = authHeader?.split(" ")[1];

    const secret = "WTF-SECRET-PASSWORD";
    const isVerified = jwt.verify(authToken, secret) as jwt.JwtPayload;

    if (!isVerified.userData || isVerified.userData?.role !== "Admin") {
      res.status(403).send("User not authorized");
      return;
    } 

    // req.body.user = isVerified.userData;
    // console.log("middle ware: ",req.body.user);
    
    next();
  } catch (error) {
    res.status(400).json({ success: false, error:"errorrr" });
  }
};
