const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// ==========================
// ROUTES
// ==========================

// Signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  const existingUser = db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(email);
  if (existingUser)
    return res.status(409).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const insert = db.prepare(
    "INSERT INTO users (email, password) VALUES (?, ?)",
  );
  const result = insert.run(email, hashedPassword);

  const token = jwt.sign({ id: result.lastInsertRowid, email }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(201).json({ token });
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (!user)
    return res.status(401).json({ message: "Invalid email or password" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(401).json({ message: "Invalid email or password" });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Not authorized: No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Not authorized: Invalid token" });
    }
    req.user = user;
    next();
  });
}

// Protected route
app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({
    message: "Welcome to the protected dashboard!",
    user: req.user,
  });
});

// Export the app for Vercel
module.exports = app;
