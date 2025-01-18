import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";

function Homepage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500); // Delay for animations
  }, []);

  return (
    <div className={`homepage-container ${loaded ? "loaded" : ""}`}>
      <div className="text-container">
        <h1>
          Welcome to Our <br /> Customer Feedback System!
        </h1>
        <p>Share your feedback and help others make informed decisions.</p>
        <div className="buttons">
          <Link to="/products" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      </div>
      <div className="image-container">
        <img
          src={require("../assets/review image.png")}
          alt="Background"
          className="animated-icon"
        />
      </div>
      <div className="icon-1">
        <img
          src={require("../assets/shopping-online.png")}
          alt="Icon 1"
          className="animated-icon"
        />
      </div>
      <div className="icon-2">
        <img
          src={require("../assets/product-management.png")}
          alt="Icon 2"
          className="animated-icon"
        />
      </div>
      <div className="icon-3">
        <img
          src={require("../assets/happy-face.png")}
          alt="Icon 3"
          className="animated-icon"
        />
      </div>
    </div>
  );
}

export default Homepage;
