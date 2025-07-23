import express from "express";

import { createUser } from "../contoller/authentication/register";

import { getUsers } from "../contoller/authentication/log-in";

import { deleteuser } from "../contoller/authentication/delete-user";

const user = express.Router();

user.post("/", createUser);

user.post("/login", getUsers);

user.delete("/:userId", deleteuser);

export default user;
