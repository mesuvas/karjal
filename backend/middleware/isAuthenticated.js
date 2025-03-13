const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), "secret_key"); // Verify token
    req.user = decoded; // Attach decoded user info to request
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token" });
  }
};

module.exports = isAuthenticated;
