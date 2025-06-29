import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import { useProducts } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { favorites } = useProducts();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Integrador Grupo 20
      </Link>
      
      {user && (
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Favorites {favorites.length > 0 && <span className="favorite-count">({favorites.length})</span>}
          </NavLink>
          <NavLink to="/new-product" className="btn btn-primary">
            New Product
          </NavLink>
        </div>
      )}

      <div className="navbar-right">
        {user && (
          <div className="user-info">
            <span className="welcome-message">Bienvenido, {user.name}</span>
            <button onClick={handleLogout} className="btn btn-secondary logout-btn">
              Cerrar sesión
            </button>
          </div>
        )}
        
        <div className="theme-container">
          <span className="theme-icon">{theme === "light" ? "☀️" : "🌙"}</span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
