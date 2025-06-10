import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, toggleFavorite, isFavorite, loading } = useProducts();

  if (loading) return <p>Loading product details...</p>;

  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return (
      <div>
        <h2>Product not found.</h2>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <span className="category">{product.category}</span>
        <h1>{product.title}</h1>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "var(--primary-color)",
          }}
        >
          ${product.price}
        </p>
        <p>{product.description}</p>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Link to={`/edit-product/${product.id}`} className="btn btn-primary">
            Edit
          </Link>
          <button
            onClick={() => toggleFavorite(product.id)}
            className={`favorite-btn ${isFavorite(product.id) ? "active" : ""}`}
            style={{ fontSize: "2.5rem" }}
          >
            ❤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
