import { User } from "../../model/user-model";
import { Request, Response } from "express";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const response = await User.find();
    res.send({ success: true, message: response });
  } catch (error) {}
};
