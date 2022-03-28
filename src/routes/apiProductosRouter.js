import { Router } from "express";
import {
  validateId,
  validatePostProductBody,
  validatePutProductBody
} from "../middlewares/validateApiData.js";
import ApiProductosController from "../controllers/apiProductosController.js";

const router = Router();

class ApiProductosRouter {
  constructor() {
    this.apiProductosController = new ApiProductosController();
  }

  start() {
    router.get("/", this.apiProductosController.getAllProducts);

    router.post(
      "/",
      validatePostProductBody,
      this.apiProductosController.createProduct
    );

    router.get("/:id", validateId, this.apiProductosController.getProduct);

    router.put(
      "/:id",
      validateId,
      validatePutProductBody,
      this.apiProductosController.updateProduct
    );

    router.delete(
      "/:id",
      validateId,
      this.apiProductosController.deleteProduct
    );

    return router;
  }
}

export default new ApiProductosRouter();
