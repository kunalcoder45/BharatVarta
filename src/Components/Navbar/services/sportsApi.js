// sportsApi.js
import axios from "axios";

// Your API Key
const API_KEY = "291edec955684a829a93d37af2b901f2";
const API_URL = "https://newsapi.org/v2/everything";

// Fetch sports news
export const fetchSportsNews = async () => {
  // Calculate dates for last month
  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setMonth(today.getMonth() - 1);
  const from = lastMonth.toISOString().split('T')[0];
  const to = today.toISOString().split('T')[0];

  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,      // Your API key
        q: "sports",          // Keyword for sports news
        from,                 // Start date (last month)
        to,                   // End date (today)
        language: "en",       // Language of news
        sortBy: "publishedAt", // Sort by publish date
        pageSize: 20,         // Number of articles per page
      },
    });

    if (response.data && response.data.articles) {
      return response.data.articles;  // Return the list of articles
    }
  } catch (error) {
    console.error("Error fetching sports news:", error);
    return [];
  }
};
