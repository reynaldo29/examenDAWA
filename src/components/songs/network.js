import { Router } from "express";
import * as Controller from "./controller";

const songRouter = Router();
songRouter.route("/songs").get(Controller.findAll);
songRouter.route("/songs").post(Controller.create);
songRouter.route("/songs/:id").get(Controller.read);
export default songRouter;