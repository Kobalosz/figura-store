import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import productController from "./controllers/productController.js";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.post("/api/products", productController);

app.listen(port, () => {
  connectDB();
  console.log("Server started @ port: " + port);
});
