import React, { useState } from 'react';
import '../LanguageToggle.css';

function LanguageToggle({ onLanguageChange }) {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleToggle = () => {
    setIsEnglish(!isEnglish);
    onLanguageChange(!isEnglish ? 'en' : 'fin');
  };

  return (
    <div className="toggle-container">
      <span>{isEnglish ? 'English' : 'Finnish'}</span>
      <label className="switch">
        <input type="checkbox" checked={isEnglish} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default LanguageToggle;
