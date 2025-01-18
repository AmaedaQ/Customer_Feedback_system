import React, { useEffect, useState } from "react";
import "../styles/FeedbackList.css";
import { useParams } from "react-router-dom";

const FeedbackList = () => {
  const { productId } = useParams();
  const [feedbacks, setFeedbacks] = useState([]);
  // states for pagination
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  //states for sorting
  const [sortBy, setSortBy] = useState("date");

  // states for filtering
  const [filterCategory, setFilterCategory] = useState("");
  const [filterRating, setFilterRating] = useState("");

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    const numericProductId = parseInt(productId, 10);

    let productFeedbacks = storedFeedbacks.filter(
      (feedback) => feedback.productId === numericProductId
    );

    if (filterCategory) {
      productFeedbacks = productFeedbacks.filter(
        (feedback) => feedback.category === filterCategory
      );
    }

    if (filterRating) {
      productFeedbacks = productFeedbacks.filter(
        (feedback) => feedback.rating === parseInt(filterRating, 10)
      );
    }

    productFeedbacks.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.timestamp) - new Date(a.timestamp);
      } else if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return 0;
    });

    // pagination handling
    setTotalPages(Math.ceil(productFeedbacks.length / itemsPerPage));

    setFeedbacks(
      productFeedbacks.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    );
  }, [
    productId,
    currentPage,
    itemsPerPage,
    sortBy,
    filterCategory,
    filterRating,
  ]);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setcurrentPage(page);
    }
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterCategoryChange = (e) => {
    setFilterCategory(e.target.value);
    setcurrentPage(1);
  };

  const handleFilterRatingChange = (e) => {
    setFilterRating(e.target.value);
    setcurrentPage(1);
  };

  const handleVote = (feedbackId, type) => {
    setFeedbacks((previousFeedback) =>
      previousFeedback.map((feedback) =>
        feedback.id === feedbackId
          ? {
              ...feedback,
              votes: {
                ...feedback.votes,
                [type]: (feedback.votes?.[type] || 0) + 1,
              },
            }
          : feedback
      )
    );

    // update local storage again
    const updatefeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    const feedbackIndex = updatefeedbacks.findIndex(
      (feedback) => feedback.id === feedbackId
    );
    if (feedbackIndex !== -1) {
      updatefeedbacks[feedbackIndex].votes = {
        ...(updatefeedbacks[feedbackIndex].votes || {}),
        [type]: (updatefeedbacks[feedbackIndex].votes[type] || 0) + 1,
      };

      localStorage.setItem("feedbacks", JSON.stringify(updatefeedbacks));
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Feedback List</h1>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <label htmlFor="sortBy" className="form-label">
            Sort by:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={handleSortChange}
            className="form-select"
          >
            <option value="date">Date</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="filterCategory" className="form-label">
            Filter by Category:
          </label>
          <select
            id="filterCategory"
            value={filterCategory}
            onChange={handleFilterCategoryChange}
            className="form-select"
          >
            <option value="">All Categories</option>
            <option value="price">Price</option>
            <option value="quality">Quality</option>
            <option value="customerservice">Customer Service</option>
            <option value="easeofUse">Ease of Use</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="filterRating" className="form-label">
            Filter by Rating:
          </label>
          <select
            id="filterRating"
            value={filterRating}
            onChange={handleFilterRatingChange}
            className="form-select"
          >
            <option value="">All Ratings</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
      </div>

      <div className="row">
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <div className="col-md-4 mb-4" key={feedback.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">{feedback.title}</h4>
                  <p className="card-text">{feedback.description}</p>
                  <p className="card-category">
                    <strong>Category : </strong> {feedback.category}
                  </p>
                  <p className="card-rating">
                    <strong>Rating:</strong> {feedback.rating} Star
                    {feedback.rating > 1 ? "s" : ""}
                  </p>
                  {feedback.userDetails && (
                    <p className="card-user-details">
                      <strong>User Details:</strong> {feedback.userDetails}
                    </p>
                  )}
                  {feedback.timestamp && (
                    <p className="card-timestamp">
                      <strong>Submitted On:</strong> {feedback.timestamp}
                    </p>
                  )}
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-success me-2 "
                    onClick={() => handleVote(feedback.id, "upvote")}
                  >
                    Upvote 👍 : ({feedback.votes?.upvote || 0})
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleVote(feedback.id, "downvote")}
                  >
                    Downvote 👎 : ({feedback.votes?.downvote || 0})
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">
              No Feedback Available for this Product
            </p>
          </div>
        )}
      </div>

      <div className="pagination mt-4 d-flex justify-content-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary me-2"
        >
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-primary ms-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FeedbackList;
