import React from 'react';

function Certifications({ language }) {
  const pdfFile = '../assets/Certification.pdf';

  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Certifications' : 'Sertifikaatit'}</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-inner">
        <h3 className="text-xl font-semibold">Web Security Basics</h3>
        <p className="text-gray-700">DevSecLab, March 26, 2024</p>
      </div>
      <a href={pdfFile} download="Certification.pdf" className="inline-block">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
          {language === 'en' ? 'Download Certification' : 'Lataa Sertifikaatti'}
        </button>
      </a>
    </section>
  );
}

export default Certifications;
