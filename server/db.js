// db.js
const Database = require('better-sqlite3');
const db = new Database('users.db');

db.prepare(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
)
`).run();

module.exports = db;
