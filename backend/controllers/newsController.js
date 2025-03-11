const News = require("../models/newsModel");

// Create News
exports.createNews = async (req, res) => {
  res.send("News created");

  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllNews = async (req, res) => {
  try {
    console.log("GET /news route hit");
    const news = await News.find();
    if (!news.length) {
      return res.status(404).json({ success: false, message: "No news found" });
    }
    res.status(200).json({ success: true, data: news });
  } catch (error) {
    console.error("Error fetching news:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};

// Read Single News by ID
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update News by ID
exports.updateNews = async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedNews) return res.status(404).json({ error: "News not found" });
    res.json(updatedNews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete News by ID
exports.deleteNews = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) return res.status(404).json({ error: "News not found" });
    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
