const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  noticedate: { type: String, required: true },
  description: { type: String, required: true },
  file: { type: String, required: true }, // Stores the file path or URL of the uploaded PDF
});

module.exports = mongoose.model("News", NewsSchema);
