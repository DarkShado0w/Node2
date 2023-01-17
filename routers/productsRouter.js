import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  findProduct,
  listProduct,
  updateProduct,
} from "../controllers/productController.js";

const productsRouter = Router();

productsRouter.route("/").get(listProduct).post(createProduct);

productsRouter
  .route("/:id")
  .get(findProduct)
  .put(updateProduct)
  .delete(deleteProduct);

export default productsRouter;
