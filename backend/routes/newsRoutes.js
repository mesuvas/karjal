const express = require("express");
const newsController = require("../controllers/newsController");
const router = express.Router();
const upload = require("../middleware/multerConfig");

router.post("/news", upload.single("file"), newsController.createNews);
router.get("/news", newsController.getAllNews);
router.get("/news/:id", newsController.getNewsById);
router.put("/news/:id", upload.single("file"), newsController.updateNews);

router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
