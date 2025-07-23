import express from "express";

import { createUser } from "../contoller/authentication/register";

import { getUsers } from "../contoller/authentication/log-in";

import { deleteuser } from "../contoller/authentication/delete-user";
import { getAllUser } from "../contoller/authentication/getAllUser";

const user = express.Router();

user.post("/", createUser);

user.post("/login", getUsers);

user.delete("/:userId", deleteuser);

user.get("/", getAllUser)

export default user;
