import { Request, Response } from "express";
import { User } from "../../model/user-model";

export const createUser = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address , ttl, isVerified} = req.body;
  try {
    const response = new User({
      email,
      password,
      phoneNumber,
      address,
      ttl,
      isVerified
    });
    await response.save();
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
