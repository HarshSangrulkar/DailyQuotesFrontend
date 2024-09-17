import React from "react";
import QuoteDisplay from "./QuoteDisplay";
import "./App.css"; // You can add your own styles here

const App = () => {
  return (
    <div className="App">
      <h1>Greeting Quote</h1>
      <QuoteDisplay />
    </div>
  );
};

export default App;
