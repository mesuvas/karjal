const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Define Routes
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
