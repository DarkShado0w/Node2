import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    quantityInStock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    quantityInStock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductsSchema);

export default Product;