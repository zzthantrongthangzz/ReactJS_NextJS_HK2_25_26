import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="btn-theme" onClick={toggleTheme}>
      Chuyển sang chế độ {theme === 'light' ? 'Tối' : 'Sáng'}
    </button>
  );
}