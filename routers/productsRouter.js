import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  findProduct,
  listProduct,
  updateProduct,
} from "../controllers/productController.js";
import validateData from "../middlewares/validation.js";
import productSchema from "../schemas/products.js";

const productsRouter = Router();

productsRouter.route("/").get(listProduct).post(validateData(productSchema),createProduct);

productsRouter
  .route("/:id")
  .get(findProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default productsRouter;
