import { Request, Response } from "express";
import { User } from "../../model/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, user?.password!); //true & false BOL BOOLEAN UTGA IRNE

    console.log("isMatch:", isMatch);

    if (isMatch) {
      const userData = {
        userId: user?._id,
        role: user?.role,
        email: user?.email,
      };

      const secret = "WTF-SECRET-PASSWORD";
      const hour = Math.floor(Date.now() / 1000) + 60 * 60;

      const accessToken = jwt.sign({ exp: hour, userData }, secret);
      res.status(200).send({ success: true, accessToken });
    } else {
      res.status(400).json({ message: "try again" });
    }
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
