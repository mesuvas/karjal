const News = require("../models/newsModel");

// Create News

exports.createNews = async (req, res) => {
  console.log("Create News Route Hit");
  res.send("Auth Route");
};
// exports.createNews = async (req, res) => {
//   res.send("Auth Route");

//   try {
//     const news = new News(req.body);
//     await news.save();
//     res.status(201).json(news);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// Read All News
exports.getAllNews = async (req, res) => {
  res.send("news Route");

  //   try {
  //     const newsList = await News.find();
  //     res.json(newsList);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
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
