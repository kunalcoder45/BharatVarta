import axios from "axios";

// API Configuration
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;  // Use .env file for security
const API_URL = "/api/news";  // Use the '/api' proxy path for Newsdata.io API

// Function to fetch general news
export const fetchNews = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        country: "us",
        pageSize: 25,
        language: "en",
        sortBy: "publishedAt",
      },
      headers: {
        "User-Agent": "Mozilla/5.0",  // Fixes 426 error if needed
        Accept: "application/json",
      },
    });

    return response?.data?.articles ?? [];
  } catch (error) {
    console.error(
      "Error fetching news:",
      error.response?.status || "Unknown Error",
      error.message
    );
    return [];
  }
};

// Function to fetch sports news
export const fetchSportsNews = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        q: "sports",
        language: "en",
        sortBy: "publishedAt",
        pageSize: 20,
      },
      headers: {
        "User-Agent": "Mozilla/5.0",  // Fixes 426 error if needed
        Accept: "application/json",
      },
    });

    return response?.data?.articles ?? [];
  } catch (error) {
    console.error(
      "Error fetching sports news:",
      error.response?.status || "Unknown Error",
      error.message
    );
    return [];
  }
};
