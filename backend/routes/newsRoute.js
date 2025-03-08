const express = require("express");
const newsController = require("../controllers/newsController");

const router = express.Router();

// Create News
router.post("/news", newsController.createNews);

// Read All News
router.get("/news", newsController.getAllNews);

// Read Single News by ID
router.get("/news/:id", newsController.getNewsById);

// Update News by ID
router.put("/news/:id", newsController.updateNews);

// Delete News by ID
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
