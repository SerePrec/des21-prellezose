import { Router } from "express";
import ApiTestsController from "../controllers/apiTestsController.js";

const router = Router();

class ApiTestsRouter {
  constructor() {
    this.apiTestsController = new ApiTestsController();
  }

  start() {
    router.get("/productos-test", this.apiTestsController.getProductosTest);
    return router;
  }
}

export default new ApiTestsRouter();
