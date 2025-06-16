import React from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

const Home = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <Loading />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="home-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
