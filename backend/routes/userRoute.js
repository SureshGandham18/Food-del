import express from "express"
import { loginUser,registerUser } from "../controllers/userController.js"
import { deflate } from "zlib";

const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);

export default userRouter;