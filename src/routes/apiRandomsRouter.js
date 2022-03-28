import { Router } from "express";
import ApiRandomsController from "../controllers/apiRandomsController.js";

const router = Router();

class ApiRandomsRouter {
  constructor() {
    this.randomsController = new ApiRandomsController();
  }

  start() {
    router.get("/", this.randomsController.getRandoms);
    return router;
  }
}

export default new ApiRandomsRouter();
