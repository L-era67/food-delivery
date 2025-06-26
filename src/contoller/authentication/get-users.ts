import { Request, Response } from "express";
import { User } from "../../model/user-model";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const response = await User.find();
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
