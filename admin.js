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

  const newsItem = document.createElement("div");
  newsItem.classList.add("news-item");

  const newsTitle = document.createElement("h3");
  newsTitle.textContent = title;

  const newsContent = document.createElement("p");
  newsContent.textContent = content;

  newsItem.appendChild(newsTitle);
  newsItem.appendChild(newsContent);

  document.getElementById("newsfeed").appendChild(newsItem);

  // Clear the form
  document.getElementById("news-title").value = "";
  document.getElementById("news-content").value = "";
});
