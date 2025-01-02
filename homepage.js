// Fetch newsfeed from localStorage
const newsfeedContainer = document.getElementById("newsfeed");

// Fetch saved news items from localStorage
const savedNews = JSON.parse(localStorage.getItem("newsfeed")) || [];

// Display each news item
savedNews.forEach(item => {
  const newsItem = document.createElement("div");
  newsItem.classList.add("news-item");

  const newsTitle = document.createElement("h3");
  newsTitle.textContent = item.title;

  const newsContent = document.createElement("p");
  newsContent.textContent = item.content;

  newsItem.appendChild(newsTitle);
  newsItem.appendChild(newsContent);

  // Add media (image or video) if provided
  if (item.media) {
    const mediaElement = document.createElement("div");
    if (item.mediaType === "image") {
      const img = document.createElement("img");
      img.src = item.media;
      img.alt = "News Image";
      mediaElement.appendChild(img);
    } else if (item.mediaType === "video") {
      const video = document.createElement("video");
      video.src = item.media;
      video.controls = true;
      mediaElement.appendChild(video);
    }
    newsItem.appendChild(mediaElement);
  }

  newsfeedContainer.appendChild(newsItem);
});
