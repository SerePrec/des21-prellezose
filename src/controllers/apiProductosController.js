import ProductsService from "../services/productosService.js";
import { logger } from "../logger/index.js";

class ApiProductosController {
  constructor() {
    this.productsService = new ProductsService();
  }

  getAllProducts = async (req, res) => {
    try {
      const lista = await this.productsService.getAllProducts();
      res.json(lista);
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        error: "No se pudo recuperar la infomación"
      });
    }
  };

  createProduct = async (req, res) => {
    try {
      const data = req.body;
      const newProduct = await this.productsService.createProduct(data);
      logger.info("Producto creado con éxito");
      res.status(201).json({ result: "ok", newProduct });
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        error: "No se pudo agregar el producto"
      });
    }
  };

  getProduct = async (req, res) => {
    try {
      const producto = await this.productsService.getProduct(req.params.id);
      producto !== null
        ? res.json(producto)
        : res.status(404).json({ error: "Producto no encontrado" });
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        error: "No se pudo recuperar la infomación"
      });
    }
  };

  updateProduct = async (req, res) => {
    try {
      const data = req.body;
      const { id } = req.params;
      const updateProduct = await this.productsService.updateProduct(id, data);
      if (updateProduct !== null) {
        logger.info("Producto actualizado con éxito");
        res.json({ result: "ok", updateProduct });
      } else {
        logger.warn("Producto no encontrado");
        res.status(404).json({ error: "Producto no encontrado" });
      }
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        error: "No se pudo actualizar el producto"
      });
    }
  };

  deleteProduct = async (req, res) => {
    try {
      const deletedId = await this.productsService.deleteProduct(req.params.id);
      if (deletedId !== null) {
        logger.info("Producto borrado con éxito");
        res.json({ result: "ok", deletedId });
      } else {
        logger.warn("Producto no encontrado");
        res.status(404).json({ error: "Producto no encontrado" });
      }
    } catch (error) {
      logger.error(error);
      res.status(500).json({
        error: "No se pudo eliminar el producto"
      });
    }
  };
}

export default ApiProductosController;
