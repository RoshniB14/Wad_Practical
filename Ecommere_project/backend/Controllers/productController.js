const Product = require("../Models/Product");

// Get All Products
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get Single Product
exports.getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

// Add a New Product 
exports.createProduct = async (req, res) => {
  const { name, description, price, category, image, stock } = req.body;
  const product = new Product({ name, description, price, category, image, stock });
  await product.save();
  res.status(201).json(product);
};

// Update Product
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  Object.assign(product, req.body);
  await product.save();
  res.json(product);
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json({ message: "Product removed" });
};
