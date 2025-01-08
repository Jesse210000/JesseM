import React from 'react';

function Education({ language }) {
  const educationData = [
    {
      school: 'Tampereen Teknillinen Lukio',
      degree: language === 'en' ? 'High School Diploma' : 'Ylioppilastutkinto',
      date: '2022 - 2025',
    },
    {
      school: 'Tampereen Seudun Ammattiopisto Tredu',
      degree: language === 'en' ? 'Software Developer' : 'Ohjelmistokehittäjä',
      date: '2022 - 2025',
    },
    {
      school: 'Etelä-Hervannan Koulu',
      degree: language === 'en' ? 'primary school' : 'Peruskoulu',
      date: '2012 - 2022',
    },
  ];

  return (
    <section className="education bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Education' : 'Koulutus'}</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="border-b border-gray-700 py-4 last:border-none">
          <h3 className="text-xl font-bold text-blue-400">{edu.school}</h3>
          <p className="text-gray-300">{edu.degree} ({edu.date})</p>
        </div>
      ))}
    </section>
  );
}

export default Education;