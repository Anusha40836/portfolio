import React, { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Anusha A</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
