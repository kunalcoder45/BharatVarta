import axios from "axios";

// Your API Key
const API_KEY = "291edec955684a829a93d37af2b901f2";
const API_URL = "https://newsapi.org/v2/top-headlines";

// Function to fetch news
export const fetchNews = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        country: "us",
        //category: "top",
        pageSize: 25, 
        language: "en",
        sortBy: "publishedAt"
      },
    });
    
    if (response.data && response.data.articles) {
      console.log(response.data.articles); // Log articles to console
      return response.data.articles; // Return the articles
    } else {
      console.log("No articles found.");
      return []; // Return empty array if no articles found
    }
  } catch (error) {
    console.error("Error fetching news:", error.message); // Log error message
    return []; // Return empty array in case of error
  }
};


// sports news 


export const fetchSportsNews = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        q: "sports",
        language: "en",
        sortBy: "publishedAt",
        pageSize: 20,  // Fetch up to 10 sports articles
      },
    });

    if (response.data && response.data.articles) {
      return response.data.articles;
    }
  } catch (error) {
    console.error("Error fetching sports news:", error);
    return [];
  }
};