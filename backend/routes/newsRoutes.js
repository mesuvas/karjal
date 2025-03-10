const express = require("express");
const newsController = require("../controllers/newsController");
const News = require("../models/newsModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("news Route");
});
// Create News
router.post("/news", newsController.createNews);

// Read All News
router.get("/news", async (req, res) => {
  try {
    const news = await News.find(); // Fetch all news from the database
    res.status(200).json({ success: true, data: news });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
});

// Read Single News by ID
router.get("/news/:id", newsController.getNewsById);

// Update News by ID
router.put("/news/:id", newsController.updateNews);

// Delete News by ID
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
