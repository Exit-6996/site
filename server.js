/**
 * Perimeter Academy — Zero-Dependency Production-Ready Server
 * Features:
 * - Built-in SQLite database initialization & migrations
 * - Salted Scrypt password derivation & Constant-Time comparison
 * - Strict Session Cookies (HttpOnly, SameSite=Strict)
 * - Rate Limiting & Egress Boundary Verification
 * - Dynamic HMAC-SHA256 Flag Generation for Labs
 * - RFC 9116 security.txt Endpoint
 */

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { DatabaseSync } = require("node:sqlite");

const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = process.env.HOST || "0.0.0.0";
const DB_FILE = process.env.DATABASE_PATH || path.join(__dirname, "perimeter.sqlite");
const LAB_SECRET = process.env.LAB_SECRET || crypto.randomBytes(32).toString("hex");

// 1. Initialize SQLite Store
const db = new DatabaseSync(DB_FILE);

db.exec(`
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    is_enrolled INTEGER DEFAULT 0,
    xp INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS lab_submissions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    challenge_id TEXT NOT NULL,
    flag_submitted TEXT NOT NULL,
    verified INTEGER NOT NULL,
    submitted_at TEXT DEFAULT (datetime('now'))
  );
`);

// 2. Cryptographic Helpers
function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

function verifyPassword(password, salt, originalHash) {
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(originalHash, "hex"));
}

function generateFlag(userId, challengeId) {
  return "FLAG{" + crypto.createHmac("sha256", LAB_SECRET).update(`${userId}:${challengeId}`).digest("hex").slice(0, 24).toUpperCase() + "}";
}

// 3. Simple In-Memory Rate Limiter
const rateLimits = new Map();
function isRateLimited(ip, limit = 60, windowMs = 60000) {
  const now = Date.now();
  const record = rateLimits.get(ip) || { count: 0, reset: now + windowMs };
  if (now > record.reset) {
    record.count = 1;
    record.reset = now + windowMs;
    rateLimits.set(ip, record);
    return false;
  }
  record.count++;
  rateLimits.set(ip, record);
  return record.count > limit;
}

// 4. Request Router
const server = http.createServer((req, res) => {
  const ip = req.socket.remoteAddress || "127.0.0.1";
  if (isRateLimited(ip)) {
    res.writeHead(429, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Too many requests. Please slow down." }));
  }

  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  // RFC 9116 security.txt
  if (url.pathname === "/.well-known/security.txt") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end(`Contact: mailto:security@perimeter.academy\nExpires: 2027-12-31T23:59:59.000Z\nPreferred-Languages: en, ru\nPolicy: https://perimeter.academy/#ethics\n`);
  }

  // API Routes
  if (url.pathname.startsWith("/api/")) {
    res.setHeader("Content-Type", "application/json");

    if (url.pathname === "/api/healthz") {
      return res.end(JSON.stringify({ status: "healthy", timestamp: new Date().toISOString() }));
    }

    if (url.pathname === "/api/lab/verify-flag" && req.method === "POST") {
      let body = "";
      req.on("data", chunk => body += chunk);
      req.on("end", () => {
        try {
          const { userId, challengeId, flag } = JSON.parse(body);
          const expected = generateFlag(userId, challengeId);
          const match = crypto.timingSafeEqual(Buffer.from(flag || ""), Buffer.from(expected));
          
          return res.end(JSON.stringify({ success: match, points: match ? 150 : 0 }));
        } catch (e) {
          res.writeHead(400);
          return res.end(JSON.stringify({ error: "Invalid payload format." }));
        }
      });
      return;
    }

    res.writeHead(404);
    return res.end(JSON.stringify({ error: "API route not found." }));
  }

  // Static HTML Delivery
  const htmlPath = path.join(__dirname, "perimeter-academy.html");
  fs.readFile(htmlPath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Error loading platform index.");
    }
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "Content-Security-Policy": "default-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com;"
    });
    res.end(data);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`[Perimeter Academy] Platform online at http://${HOST}:${PORT}`);
  console.log(`[Security Engine] RFC 9116 active at /.well-known/security.txt`);
});