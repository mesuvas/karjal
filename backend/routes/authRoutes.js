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

// Read All News
router.get("/news", async (req, res) => {
  try {
    const newsList = await News.find();
    res.json(newsList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read Single News by ID
router.get("/news/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update News by ID
router.put("/news/:id", async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedNews) return res.status(404).json({ error: "News not found" });
    res.json(updatedNews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
