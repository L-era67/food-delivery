import { Request, Response } from "express";
import { User } from "../../model/user-model";
export const deleteuser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const response = await User.findByIdAndDelete(userId);
    res.status(200).send({ success: true, response });
  } catch (error) {
    res.status(400).send({ success: false, message: "error" });
  }
};
