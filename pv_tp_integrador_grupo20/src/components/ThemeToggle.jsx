import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label
      className="theme-toggle-switch"
      title={theme === "dark" ? "Activate light mode" : "Activate dark mode"}
    >
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
