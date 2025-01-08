import React from 'react';

function Experience({ language }) {
  const experiences = [
    {
      title: language === 'en' ? 'Software Developer Intern' : 'Ohjelmistokehittäjä Harjoittelija',
      company: 'ArtXperience Oy',
      date: 'October 2024 - February 2025',
      description: language === 'en' 
        ? 'In this role, I worked on various software development projects, including full-stack web applications and backend integrations. My responsibilities included developing RESTful APIs, and collaborating with cross-functional teams to ensure seamless project delivery.'
        : 'Tässä roolissa työskentelin monipuolisissa ohjelmistokehitysprojekteissa, kuten web-sovellusten ja taustajärjestelmien integrointien parissa. Vastuualueeni sisälsivät RESTful-rajapintojen kehittämisen,ja yhteistyön monialaisissa tiimeissä projektien sujuvan toteutuksen varmistamiseksi.',
    },
    {
      title: language === 'en' ? 'Software Developer Intern' : 'Ohjelmistokehittäjä Harjoittelija',
      company: 'Luotain Consulting Oy',
      date: 'October 2023 - December 2023',
      description: language === 'en' 
        ? 'At Luotain Consulting, I contributed to developing client-facing web applications using WordPress. My key achievements include improving application style, resolving bugs, and implementing new features.'
        : 'Luotain Consultingilla osallistuin asiakaslähtöisten web-sovellusten kehittämiseen käyttämällä WordPressiä. Merkittävimpiä saavutuksiani olivat sovelluksen tyylin parantaminen, virheiden korjaaminen ja uusien ominaisuuksien toteuttaminen.',
    },
    {
      title: language === 'en' ? 'Summer job' : 'Kesätyöpaikka',
      company: 'Tampere University Hospital (TAYS)',
      date: 'June 2022 - July 2022',
      description: language === 'en' 
        ? 'My duties included advising TAYS patients, export, helping staff and shelving of goods and pharmaceuticals.'
        : 'Tehtäviini kuului TAYS:in potilaiden neuvonta, vienti, henkilöstön avustaminen sekä tavaroiden ja lääkkeiden hyllytys.',
    },
  ];

  const sortedExperiences = experiences.sort((a, b) => new Date(b.date.split(' - ')[0]) - new Date(a.date.split(' - ')[0]));

  return (
    <section className="experience bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Experience' : 'Kokemus'}</h2>
      {sortedExperiences.map((exp, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
          <h4 className="text-lg font-medium text-gray-300">{exp.company}</h4>
          <p className="text-gray-400">{exp.date}</p>
          <p className="text-gray-200 mt-2">{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
