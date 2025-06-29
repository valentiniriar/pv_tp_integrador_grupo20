import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import ProductForm from "./pages/ProductForm";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Rutas protegidas */}
      <Route path="/" element={<Layout />}>
        <Route index element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="product/:id" element={
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        } />
        <Route path="favorites" element={
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        } />
        <Route path="new-product" element={
          <PrivateRoute>
            <ProductForm />
          </PrivateRoute>
        } />
        <Route path="edit-product/:id" element={
          <PrivateRoute>
            <ProductForm />
          </PrivateRoute>
        } />
      </Route>
      
      {/* Redirigir a login si no está autenticado */}
      <Route path="*" element={
        isAuthenticated() ? <h2>404: Page Not Found</h2> : <Navigate to="/login" replace />
      } />
    </Routes>
  );
}

export default App;
