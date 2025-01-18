import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getData } from "../utils/api";
import "../styles/ProductList.css"; // Correct path to CSS file

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const products = await getData();

      setProductList(products);
    };

    fetchProductData();
  }, []);

  return (
    <div className="main-container mt-4">
      <h1 className="text-center mb-4">Product List</h1>
      {/* container to contain all product items */}
      <div className="row justify-content-center">
        {productList.map((p) => (
          <div className="product-card col-md-3 mb-6" key={p.id}>
            <img
              src={p.image}
              className="card-img-top product-image"
              alt={p.title}
            />
            <div className="card-body flex-column">
              <h4 className="card-title">{p.title}</h4>
              <p className="crard-text product-description">{p.description}</p>
            </div>
            <div className="card-footer">
              <Link
                to={`/feedback/${p.id}`}
                className="btn btn-primary btn-sm me-2"
              >
                Add Feedback
              </Link>
              <Link
                to={`/feedback-list/${p.id}`}
                className="btn btn-secondary btn-sm"
              >
                View Feedback
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
