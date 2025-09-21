import express from "express";
import mongoose from "mongoose";
import {
  getAllProducts,
  getProduct,
  newProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productControllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProduct);

productRouter.post("/", newProduct);

productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

export default productRouter;
