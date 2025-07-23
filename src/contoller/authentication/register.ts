import { Request, Response } from "express";
import { User } from "../../model/user-model";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashedPassword: ", hashedPassword);

  try {
    const response = new User({
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      // ttl,
      isVerified: false,
    });
    await response.save();
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};