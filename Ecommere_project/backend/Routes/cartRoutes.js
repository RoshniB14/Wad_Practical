const express = require("express");
const { getCart, addToCart, removeFromCart } = require("../Controllers/cartController");
const { protect } = require("../Middleware/authMiddelware");

const router = express.Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/:id", protect, removeFromCart);

module.exports = router;
