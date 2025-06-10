import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Integrador Grupo 20
      </Link>
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
          Favorites
        </NavLink>
        <NavLink to="/new-product" className="btn btn-primary">
          New Product
        </NavLink>
      </div>

      <div className="theme-container">
        <span className="theme-icon">{theme === "light" ? "☀️" : "🌙"}</span>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
