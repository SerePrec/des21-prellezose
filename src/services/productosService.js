import ProductsRepository from "../repositories/ProductsRepository.js";
import { Product } from "../model/entities/Product.js";
import { ProductDTO } from "../model/DTOs/ProductDTO.js";

class ProductosService {
  constructor() {
    this.productsModel = new ProductsRepository();
  }

  getAllProducts = async () => {
    const productEntities = await this.productsModel.getAll();
    const products = productEntities.map(product => new ProductDTO(product));
    return products;
  };

  createProduct = async newProductData => {
    const newProductEntitie = new Product(newProductData);
    const createdProductEntitie = await this.productsModel.save(
      newProductEntitie
    );
    return new ProductDTO(createdProductEntitie);
  };

  getProduct = async id => {
    const productEntitie = await this.productsModel.getById(id);
    return productEntitie ? new ProductDTO(productEntitie) : productEntitie;
  };

  updateProduct = async (id, updateData) => {
    const updatedProductEntitie = await this.productsModel.updateById(
      id,
      updateData
    );
    return updatedProductEntitie
      ? new ProductDTO(updatedProductEntitie)
      : updatedProductEntitie;
  };

  deleteProduct = async id => {
    const deletedId = await this.productsModel.deleteById(id);
    return deletedId;
  };
}

export default ProductosService;
