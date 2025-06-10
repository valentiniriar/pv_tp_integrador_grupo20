import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const { products, favorites } = useProducts();
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <div>
      <h1>Your Favorites</h1>
      {favoriteProducts.length > 0 ? (
        <div className="products-grid">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>You haven't marked any products as favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
