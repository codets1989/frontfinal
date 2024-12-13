// src/components/ToggleThemeButton.js
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme(); // Get the toggleTheme function

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'absolute',  // Position button in the top right corner
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent',
        border: '1px solid #ccc',
        color: 'inherit',
        padding: '5px 10px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ToggleThemeButton;
