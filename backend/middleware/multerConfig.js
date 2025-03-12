const multer = require("multer");
const path = require("path");

// Set up multer storage configuration (you can customize this as needed)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // The directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique file name based on timestamp
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
