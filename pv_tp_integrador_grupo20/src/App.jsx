import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import ProductForm from "./pages/ProductForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="new-product" element={<ProductForm />} />
        <Route path="edit-product/:id" element={<ProductForm />} />
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Route>
    </Routes>
  );
}

export default App;
