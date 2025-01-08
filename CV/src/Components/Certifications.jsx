import React from 'react';

function Certifications({ language }) {
  return (
    <section className="certifications bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Certifications' : 'Sertifikaatit'}</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-blue-400">Web Security Basics</h3>
        <p className="text-gray-300">DevSecLab, March 2024</p>
      </div>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded transition duration-300">
        {language === 'en' ? 'Download Certificate' : 'Lataa Sertifikaatti'}
      </button>
    </section>
  );
}

export default Certifications;