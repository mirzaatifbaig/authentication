// db.js
const Database = require("better-sqlite3");
const path = require("path");

// Use /tmp directory for the database in the Vercel environment
const dbPath = process.env.VERCEL_ENV === "production" ? path.join("/tmp", "users.db") : "users.db";
const db = new Database(dbPath);

db.prepare(
  `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
)
`,
).run();

module.exports = db;
