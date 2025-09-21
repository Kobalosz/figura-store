import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import productController from "./controllers/productController.js";
import Product from "./models/product.js";

dotenv.config();
const app = express();
app.use(express.json()); //! Middleware that allows for accepting JSON data, do not touch.
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.get("/api/products", async (req, res) => {
  try {
    const prdcts = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: prdcts });
  } catch (error) {
    console.error();
    res.status(500).json({
      success: false,
      message: "Internal Server Error returning the Products.",
    });
  }
});

app.post("/api/products", productController);

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Could not find a product by that ID" });
  }

  try {
    await Product.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json({
      success: true,
      message: "Your product was successfully updated!",
    });
  } catch (error) {
    console.error();
    res.status(500).json({
      success: false,
      message: "Internal Server error during product update, please try again",
    });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: `Your product was deleted!` });
  } catch (error) {
    console.error();
    res.status(500).json({
      success: false,
      message: `Could not find product by the id of: ${id}`,
    });
  }
});

app.listen(port, () => {
  connectDB();
  console.log("Server started @ port: " + port);
});
