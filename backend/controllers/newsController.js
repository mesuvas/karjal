const News = require("../models/newsModel");

// Create News
const createNews = async (req, res) => {
  try {
    const news = new News({
      title: req.body.title,
      noticedate: req.body.noticedate,
      description: req.body.description,
      file: req.file.path, // The file path saved by multer
    });

    await news.save();
    res.status(201).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllNews = async (req, res) => {
  try {
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
const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update News by ID
const updateNews = async (req, res) => {
  try {
    const newsId = req.params.id;
    const updatedData = {
      title: req.body.title,
      noticedate: req.body.noticedate,
      description: req.body.description,
    };

    // If a new file is uploaded, update the file path
    if (req.file) {
      updatedData.file = req.file.path;
    }
    const updatedNews = await News.findByIdAndUpdate(newsId, updatedData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validations are applied
    });
    if (!updatedNews) return res.status(404).json({ error: "News not found" });
    res.json(updatedNews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete News by ID
const deleteNews = async (req, res) => {
  try {
    const deletedNews = await News.findByIdAndDelete(req.params.id);
    if (!deletedNews) return res.status(404).json({ error: "News not found" });
    res.json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNews,
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
};
