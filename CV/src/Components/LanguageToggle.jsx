import React, { useState } from 'react';
import '../LanguageToggle.css';

function LanguageToggle({ onLanguageChange }) {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const handleLanguageSelect = (lang) => {
    onLanguageChange(lang);
    setIsPopupOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-blue-900 via-gray-900 to-green-900 flex items-center justify-center">
          <div className="bg-white p-10 rounded-lg shadow-2xl text-center max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Choose Your Language</h2>
            <p className="text-gray-600 mb-8">Please select your preferred language.</p>
            <div className="flex justify-around items-center space-x-4">
              <button
                className="flex flex-col items-center px-6 py-4 bg-blue-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                onClick={() => handleLanguageSelect('en')}
              >
                🇬🇧
                <span className="mt-2">English</span>
              </button>
              <button
                className="flex flex-col items-center px-6 py-4 bg-green-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
                onClick={() => handleLanguageSelect('fin')}
              >
                🇫🇮
                <span className="mt-2">Finnish</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LanguageToggle;
