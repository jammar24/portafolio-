import React, { useState } from 'react';
import'./styles/footer.css'

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <footer className={`footer ${darkMode ? 'dark-mode' : ''}`}>
    <div className="footer__content">
      <div className="footer__dark-mode">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <span className="slider round"></span>
        </label>
        <span className="footer__dark-mode-label">&copy;Desarrollado por Jamar Masias</span>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
