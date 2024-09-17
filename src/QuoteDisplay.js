import React, { useState, useEffect } from "react";
import { getGreetingQuote } from "./QuotesService";

const QuoteDisplay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const data = await getGreetingQuote();
        if (data) {
          setQuote(data.quote);
          setAuthor(data.author);
        }
      } catch (error) {
        setError("Failed to fetch quote");
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      {error ? (
        <p>{error}</p>
      ) : (
        <blockquote>
          <p>"{quote}"</p>
          <footer>- {author}</footer>
        </blockquote>
      )}
    </div>
  );
};

export default QuoteDisplay;
