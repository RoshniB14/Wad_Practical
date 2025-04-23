const Order = require("../Models/Order");
const Cart = require("../Models/Cart");

// Create Order
exports.createOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.items.length === 0) return res.status(400).json({ message: "Cart is empty" });

  const totalAmount = cart.items.reduce((acc, item) => acc + item.quantity * 100, 0); // Assuming price 100 for now
  const order = new Order({ userId: req.user.id, products: cart.items, totalAmount });

  await order.save();
  await Cart.findOneAndDelete({ userId: req.user.id });

  res.status(201).json(order);
};

// Get User Orders
exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).populate("products.productId");
  res.json(orders);
};

// Get All Orders (Admin only)
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("products.productId");
  res.json(orders);
};
