// Basic authentication for admin access
const correctPassword = "admin123"; // Set your own password
const adminPasswordPrompt = prompt("Enter Admin Password:");

if (adminPasswordPrompt !== correctPassword) {
  alert("Incorrect password! Redirecting to home...");
  window.location.href = "/"; // Redirect to homepage if password is incorrect
}

// Handle newsfeed form submission
document.getElementById("newsfeed-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("news-title").value;
  const content = document.getElementById("news-content").value;
  const media = document.getElementById("news-media").value;
  const mediaType = document.getElementById("media-type").value;

  const newsItem = {
    title: title,
    content: content,
    media: media || null,  // Optional media URL
    mediaType: mediaType
  };

  // Fetch current news from localStorage
  const savedNews = JSON.parse(localStorage.getItem("newsfeed")) || [];

  // Add new news item
  savedNews.push(newsItem);

  // Save updated news to localStorage
  localStorage.setItem("newsfeed", JSON.stringify(savedNews));

  // Clear the form
  document.getElementById("news-title").value = "";
  document.getElementById("news-content").value = "";
  document.getElementById("news-media").value = "";

  // Optionally redirect to homepage after posting
  window.location.href = "/";
});
