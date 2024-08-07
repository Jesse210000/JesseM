import React from 'react';

function Education({ language }) {
  const educationData = [
    {
      school: 'Tampereen Teknillinen Lukio',
      degree: 'Ylioppilastutkinto',
      dates: '2022 - 2025',
    },
    {
      school: 'Tampereen Seudun Ammattiopisto Tredu',
      degree: 'Ohjelmistokehittäjä',
      dates: '2022 - 2025',
    },
    {
      school: 'Etelä-Hervannan Koulu',
      degree: 'Peruskoulu',
      dates: '2012 - 2022',
    }
  ];

  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Education' : 'Koulutus'}</h2>
      <div className="relative border-l-4 border-blue-500 pl-4">
        {educationData.map((edu, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="absolute -left-2.5 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>
            <div className="pl-8">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="text-gray-700">{edu.degree}, {edu.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
