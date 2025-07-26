// import { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// interface CustomRequest extends Request {
//   user?: any;
// }

// export const verifyToken = (
//   req: CustomRequest,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const headerAuth = req.headers.authorization?.split(" ")[1] || "";

//     if (!headerAuth) {
//       res.status(401).send("Token not provided");
//       return;
//     }
//     const secret = "WTF-SECRET-PASSWORD";
//     const decoded = jwt.verify(headerAuth, secret) as jwt.JwtPayload;

//     // if (!decoded) {
//     //   throw new Error("found");
//     // }
//     console.log("req middle GET UDER", decoded.userData);

//     req.user = decoded.userData;
//     next();
//   } catch (error) {
//     res.status(400).send({ success: false, error: "middle error" });
//   }
// };
