import expressAsyncHandler from "express-async-handler";
import { reset } from "nodemon";
import Product from "../models/products.js";

//createProduct
export const createProduct = expressAsyncHandler((req, res) => {
  const { productName, productPrice, productBrand } = req.body;
  Product.create({
    productName,
    productPrice,
    productBrand,
  })
    .then((response) => {
      res.send({ message: "product created", product: response });
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "error occured while creating product" });
    });
});

//list all products
export const listProduct = expressAsyncHandler(async (req, res) => {
  // Product.find({})
  //   .then((response) => {
  //     res.send({ message: response });
  //   })
  //   .catch((error) => {
  //     res.send({
  //       message: `error occured while listing products. ERROR: ${error}`,
  //     });
  //   });
  // const products = Product.find({});
  // res.send({message:'Products Listed!',products});
  try {
    const products = await Product.find({});
    res.send({ message: "Products Listed!", products });
  } catch (err) {
    res.send({
      message: `error occured while listing products. ERROR: ${error}`,
    });
  }
});

//find one product
export const findProduct = expressAsyncHandler((req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((response) => {
      res.send({ message: response });
    })
    .catch((error) => {
      res.send({
        message: "Error getting product!",
        products: JSON.stringify(error),
      });
    });
});

//updateProduct
export const updateProduct = expressAsyncHandler((req, res) => {
  const { productName, productPrice, productBrand, ...rest } = req.body;
  Product.findOneAndUpdate(
    { productName },
    {
      productName,
      productPrice,
      productBrand,
    }
  )
    .then((response) => {
      console.log(response);
      res.send({ message: "Product Updated!" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: "Error updating products!" });
    });
});

//delete user
export const deleteProduct = expressAsyncHandler((req, res) => {
  const { id } = req.params;
  Product.findOneAndDelete({ _id: id })
    .then((response) => {
      res.send({
        message: "Product deleted!",
        user: response,
      });
      console.log(response);
    })
    .catch((err) => {
      res.send({
        message: "Error deleting product!",
        users: JSON.stringify(err),
      });
      console.log(err);
    });
});