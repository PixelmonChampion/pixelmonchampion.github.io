const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

const newsfeedPath = "./data/newsfeed.json"; // JSON file to store posts

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// Load newsfeed from file
function loadNewsfeed() {
  if (!fs.existsSync(newsfeedPath)) return [];
  return JSON.parse(fs.readFileSync(newsfeedPath, "utf-8"));
}

// Save newsfeed to file
function saveNewsfeed(posts) {
  fs.writeFileSync(newsfeedPath, JSON.stringify(posts, null, 2));
}

// Get all newsfeed posts
app.get("/api/newsfeed", (req, res) => {
  const posts = loadNewsfeed();
  res.json(posts);
});

// Add a new post
app.post("/api/newsfeed", upload.single("media"), (req, res) => {
  const { title, content } = req.body;
  const media = req.file ? `/uploads/${req.file.filename}` : null;
  const mediaType = req.file ? req.file.mimetype.split("/")[0] : null;

  const newPost = { title, content, media, mediaType };
  const posts = loadNewsfeed();

  posts.unshift(newPost); // Add new post to the top
  saveNewsfeed(posts);

  res.status(201).json(newPost);
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
