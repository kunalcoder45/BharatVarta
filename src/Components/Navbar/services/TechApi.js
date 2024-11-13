// techApi.js
import axios from "axios";

// Your API Key
const API_KEY = "291edec955684a829a93d37af2b901f2";
const API_URL = "https://newsapi.org/v2/everything";

export const fetchTechNews = async () => {
  // Calculate dates for the past month
  const today = new Date();
  const lastMonth = new Date(today);
  lastMonth.setMonth(today.getMonth() - 1);
  const from = lastMonth.toISOString().split('T')[0];
  const to = today.toISOString().split('T')[0];

  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,       // Your API key
        q: "Technology",       // Keyword for technology news
        from,                  // Start date (last month)
        to,                    // End date (today)
        language: "en",
        sortBy: "publishedAt",
        pageSize: 20,
      },
    });

    if (response.data && response.data.articles) {
      // Return the list of articles
      return response.data.articles;
    }
  } catch (error) {
    console.error("Error fetching tech news:", error);
    return [];
  }
};
