import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const Favorites = () => {
  const { products, favorites, loading, error } = useProducts();
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  if (loading) return <Loading />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      {favoriteProducts.length > 0 ? (
        <div className="products-grid">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>You haven't marked any products as favorites yet.</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
