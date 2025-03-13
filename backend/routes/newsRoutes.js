const express = require("express");
const newsController = require("../controllers/newsController");
const router = express.Router();
const upload = require("../middleware/multerConfig");
const isAuthenticated = require("../middleware/isAuthenticated");

router.post(
  "/news",
  isAuthenticated,
  upload.single("file"),
  newsController.createNews
);
router.get("/news", isAuthenticated, newsController.getAllNews);
router.get("/news/:id", isAuthenticated, newsController.getNewsById);
router.put(
  "/news/:id",
  isAuthenticated,
  upload.single("file"),
  newsController.updateNews
);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
