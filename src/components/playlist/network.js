import { Router } from "express";
import * as Controller from "./controller";

const playlistRouter = Router();
//songRouter.route("/songs").get(Controller.findAll);
playlistRouter.route("/playlist").post(Controller.create);
playlistRouter.route("/playlist/detail/:id").get(Controller.detail);
playlistRouter.route("/playlist/:id").get(Controller.findOnePlayList);
export default playlistRouter;