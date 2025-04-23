const express = require("express");
const { createOrder, getOrders, getAllOrders } = require("../Controllers/orderController");
const { protect } = require("../Middleware/authMiddelware");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.get("/all", protect, getAllOrders);

module.exports = router;
