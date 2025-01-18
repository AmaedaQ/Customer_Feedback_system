import React from "react";
import "../styles/FeedbackForm.css";
import { getData } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FeedbackForm = () => {
  const { productId } = useParams();
  const [productName, setProductName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);
  const [category, setCategory] = useState("");
  const [userDetails, setuserDetails] = useState("");
  const [errors, seterrors] = useState({});
  const [submitted, setSubmitted] = useState("");
  const numericProductId = parseInt(productId, 10);

  useEffect(() => {
    const fetchProductData = async () => {
      const products = await getData();

      const product = products.find((p) => p.id === parseInt(productId));

      if (product) {
        setProductName(product.title);
      } else {
        console.log("product not found");
      }
    };
    fetchProductData();
  }, [productId, setProductName]);
  const handleSubmition = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!description) newErrors.description = "Description is required";
    if (!rating) newErrors.rating = "Rating is needed";
    if (!category) newErrors.category = "Category is required";
    seterrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const feedback = {
        id: Date.now(), // Unique ID for the feedback
        productId: numericProductId, // Product ID for filtering
        productName: productName,
        title: title,
        description: description,
        rating: rating,
        category: category,
        userDetails: userDetails,
        timestamp: new Date().toLocaleString(),
        votes: 0,
      };

      const existingFeedbacks =
        JSON.parse(localStorage.getItem("feedbacks")) || [];
      existingFeedbacks.push(feedback);
      localStorage.setItem("feedbacks", JSON.stringify(existingFeedbacks));

      setTitle("");
      setDescription("");
      setRating(1);
      setuserDetails("");
      setCategory("");
      setSubmitted("Your feedback has been submitted");
    }
  };

  return (
    <div className="feedback-form-container mt-4">
      <h2 className="form-heading text-center mb-4">
        Submit feedback for {productName}
      </h2>
      <form onSubmit={handleSubmition} className="form">
        <div className="form-group form-row">
          <label htmlFor="title" className="form-label">
            Feedback Title :
          </label>
          <input
            type="text"
            id="title"
            className="form-control title-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          {errors.title && <div className="text-danger">{errors.title}</div>}
        </div>

        <div className="form-group form-row">
          <label htmlFor="category" className="form-label">
            Category :
          </label>
          <select
            id="category"
            className="form-control category-field"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="price">Price</option>
            <option value="quality">Quality</option>
            <option value="customerservice">Customer Service</option>
            <option value="easeofUse">Ease Of Use</option>
          </select>
          {errors.category && (
            <div className="text-danger">{errors.category}</div>
          )}
        </div>

        <div className="form-group form-row">
          <label htmlFor="description" className="form-label">
            Feedback Description :
          </label>
          <textarea
            id="description"
            className="form-control description-field"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {errors.description && (
            <div className="text-danger">{errors.description}</div>
          )}
        </div>

        <div className="form-group form-row">
          <label className="form-label">Rating:</label>
          <div className="rating-options rating-field">
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} className="form-check">
                <input
                  type="radio"
                  id={`rating-${star}`}
                  name="rating"
                  value={star}
                  checked={rating === star}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="form-check-input"
                />
                <label htmlFor={`rating-${star}`} className="form-check-label">
                  {star} Star{star > 1 ? "s" : ""}
                </label>
              </div>
            ))}
          </div>
          {errors.rating && <div className="text-danger">{errors.rating}</div>}
        </div>

        <div className="form-group form-row">
          <label htmlFor="userDetails" className="form-label">
            User Details :
          </label>
          <textarea
            id="userDetails"
            className="form-control user-details-field"
            rows="4"
            value={userDetails}
            onChange={(e) => setuserDetails(e.target.value)}
            required
          />
          {errors.userDetails && (
            <div className="text-danger">{errors.userDetails}</div>
          )}
        </div>
        <div className="form-button-container">
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>

      {submitted && ( // Display submission message if present
        <div className="alert alert-success mt-4">{submitted}</div>
      )}
    </div>
  );
};
export default FeedbackForm;
