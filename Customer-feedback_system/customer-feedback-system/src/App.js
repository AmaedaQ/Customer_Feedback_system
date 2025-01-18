import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import "./App.css"; // Import App-specific styles if needed
import FeedbackForm from "./pages/FeedbackForm";
import FeedbackList from "./pages/FeedbackList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/feedback/:productId" element={<FeedbackForm />} />
        <Route path="/feedback-list/:productId" element={<FeedbackList />} />
      </Routes>
    </Router>
  );
}

export default App;
