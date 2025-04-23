


const express = require("express");
const { register, login, getUserProfile } = require("../Controllers/authController");
const { protect } = require("../Middleware/authMiddelware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", protect, getUserProfile);

module.exports = router;
