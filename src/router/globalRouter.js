import globalController from "../controller/globalController";
import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", globalController.homeController);
globalRouter.get("/create", globalController.createController);
globalRouter.get("/detail", globalController.detailController);

export default globalRouter;
