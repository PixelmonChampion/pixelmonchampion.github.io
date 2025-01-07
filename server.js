const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(express.static("public"));

// Update the newsfeed
app.post("/update-newsfeed", (req, res) => {
  const { newsHTML } = req.body;

  // Append the new post to the newsfeed.html file
  fs.appendFile("public/newsfeed.html", newsHTML, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Failed to update newsfeed");
    }
    res.status(200).send("Newsfeed updated successfully");
  });
});

// Serve the app
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
