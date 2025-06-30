import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useProducts } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { favorites } = useProducts();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Integrador Grupo 20
        </Link>

        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          {user && (
            <div className="navbar-links">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                onClick={closeMenu}
              >
                Favorites{" "}
                {favorites.length > 0 && (
                  <span className="favorite-count">({favorites.length})</span>
                )}
              </NavLink>
              <NavLink
                to="/new-product"
                className="btn btn-primary"
                onClick={closeMenu}
              >
                New Product
              </NavLink>
            </div>
          )}

          <div className="navbar-right">
            {user && (
              <div className="user-info">
                <span className="welcome-message">Bienvenido, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary logout-btn"
                >
                  Cerrar sesión
                </button>
              </div>
            )}

            <div className="theme-container">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
