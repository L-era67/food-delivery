import express from "express";
import { createUser } from "../contoller/authentication/sign-up";
import { getUsers } from "../contoller/authentication/get-users";
import { deleteuser } from "../contoller/authentication/delete-user";


const user = express.Router();

user.post("/", createUser);

user.get("/", getUsers);

user.delete("/:userId", deleteuser);

export default user;