const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Registration
const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const accessToken = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign({ userId: user._id }, "refresh_secret_key", {
      expiresIn: "7d",
    });

    res.json({ message: "Login Successful..", accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const refreshToken = async (req, res) => {
  const { refreshToken } = req.cookies; // Get refresh token from the cookie

  if (!refreshToken) {
    return res.status(401).json({ error: "No refresh token provided" });
  }
  jwt.verify(refreshToken, "refresh_secret_key", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid refresh token" });
    }
    const newAccessToken = jwt.sign({ userId: user.userId }, "secret_key", {
      expiresIn: "15m",
    });
    res.json({ accessToken: newAccessToken });
  });
};

const logout = async (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  register,

  login,
  refreshToken,
  logout,
};
