import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { toggleFavorite, isFavorite } = useProducts();

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
          Ver más
        </Link>
        <button
          onClick={() => toggleFavorite(product.id)}
          className={`favorite-btn ${isFavorite(product.id) ? "active" : ""}`}
          title={
            isFavorite(product.id)
              ? "Quitar de favoritos"
              : "Añadir a favoritos"
          }
        >
          ❤
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
