import { Router } from "express";
import * as Controller from "./controller";

const userRouter = Router();

userRouter.route("/users").post(Controller.create);
userRouter.route("/users").get(Controller.findAll);
userRouter.route("/login").post(Controller.login);
export default userRouter;