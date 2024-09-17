import axios from "axios";

const API_URL = "http://localhost:8080/api/greeting/quote"; // Adjust the URL based on your backend configuration

export const getGreetingQuote = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching the quote:", error);
    throw error;
  }
};
