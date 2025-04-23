const express = require("express");
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../Controllers/productController");
const { protect } = require("../Middleware/authMiddelware");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", protect, createProduct); 
router.put("/:id", protect, updateProduct); 
router.delete("/:id", protect, deleteProduct); 

module.exports = router;
