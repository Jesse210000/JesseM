import React from 'react';

function Footer({ language }) {
  return (
    <footer className="bg-gray-800 py-6 text-center text-white">
      <p className="text-lg font-semibold">
        {language === 'en' ? 'Connect with me:' : 'Löydät minut myös näistä kanavista:'}
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/Jesse210000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 transition-colors"
        >
          {language === 'en' ? 'GitHub' : 'GitHub'}
        </a>
        <a
          href="https://www.instagram.com/makela58200/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-600 transition-colors"
        >
          {language === 'en' ? 'Instagram' : 'Instagram'}
        </a>
      </div>
      <p className="text-sm mt-4 text-gray-500">
        {language === 'en' ? '© 2025 Jesse Mäkelä. All rights reserved.' : '© 2025 Jesse Mäkelä. Kaikki oikeudet pidätetään.'}
      </p>
    </footer>
  );
}

export default Footer;