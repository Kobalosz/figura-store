import Product from "../models/product.js";

const productController = async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.img) {
    return res.status(400).json({
      success: false,
      message: "Please fill empty product parameters",
    });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      message: `Your ${newProduct.name} has been created!`,
    });
  } catch (error) {
    console.error(`There was an error creating the product:  ${error.message}`);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export default productController;
