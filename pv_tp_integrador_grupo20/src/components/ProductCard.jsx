import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useToast } from "../context/ToastContext";

const ProductCard = ({ product }) => {
  const { toggleFavorite, isFavorite } = useProducts();
  const { showToast } = useToast();

  const handleFavoriteClick = () => {
    toggleFavorite(product.id);
    showToast(
      isFavorite(product.id)
        ? "Product removed from favorites"
        : "Product added to favorites",
      "success"
    );
  };

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img src={product.image} alt={product.title} className="card-image" />
      </div>
      <div className="card-body">
        <h3 className="card-title" title={product.title}>
          {product.title}
        </h3>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{product.description}</p>
      </div>
      <div className="card-footer">
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
        <button
          onClick={handleFavoriteClick}
          className={`favorite-btn ${isFavorite(product.id) ? "active" : ""}`}
          title={
            isFavorite(product.id)
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          ❤
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
