// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import useTheme to access the current theme
import styles from "../styles.module.css";
import ToggleThemeButton from "./ToogleThemeButton";

function Navbar() {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333', // Set background color based on theme
        color: theme === 'light' ? '#000' : '#fff', // Set text color based on theme
      }}
    >
      <Link to="/" className={styles.link}>Home</Link>
      <div className={styles.aboutDropdown}>
        <Link to="/about" className={styles.link}>About</Link>
        <div className={styles.dropdownContent}>
          <Link to="/about/team" className={styles.link}>Team</Link>
          <Link to="/about/mission" className={styles.link}>Mission</Link>
        </div>
      </div>
      <Link to="/contact" className={styles.link}>Contact</Link>
      <Link to="/redux-example" className={styles.link}>Redux Example</Link>
      <Link to="/weather-app" className={styles.link}>Weather App</Link>

      {/* Place the ToggleThemeButton in the top right corner */}
      <ToggleThemeButton />
    </nav>
  );
}

export default Navbar;
