import React, { createContext, useState, useEffect, useContext } from "react";
import { getProducts } from "../api/productsApi";

export const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productId)
    );
    setFavorites((prevFavorites) =>
      prevFavorites.filter((id) => id !== productId)
    );
  };

  const value = {
    products,
    favorites,
    loading,
    error,
    toggleFavorite,
    addProduct,
    updateProduct,
    deleteProduct,
    isFavorite: (productId) => favorites.includes(productId),
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
