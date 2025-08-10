// src/components/ThemeContext/ThemeToggle.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./index";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-toggle-icon-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="theme-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1.5M12 19.5V21M4.5 12H3m18 0h-1.5M5.636 5.636l1.061 1.061M17.303 17.303l1.061 1.061M17.303 6.697l1.061-1.061M5.636 18.364l1.061-1.061M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
          />
        </svg> // Sun
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="theme-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7.5 7.5 0 109.79 9.79z"
          />
        </svg> // Moon
      )}
    </button>
  );
}
