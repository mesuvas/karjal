const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Define Routes
router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/", (req, res) => {
  res.send("Auth Route");
});

// Create News
router.post("/news", async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
