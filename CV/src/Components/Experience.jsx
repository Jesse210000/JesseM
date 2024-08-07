import React from 'react';

function Experience({ language }) {
  const jobExperiences = [
    {
      jobName: "SOFTWARE DEVELOPER INTERNSHIP",
      employer: "Luotain Consulting OY",
      date: "23/10/2023 - 22/12/2023",
      description: language === 'en' ? "Participated in software development projects, collaborated with team members, and contributed to code reviews and debugging." : "Osallistui ohjelmistokehitysprojekteihin, teki yhteistyötä tiimin jäsenten kanssa ja osallistui koodikatselmointeihin ja virheenkorjaukseen."
    }
  ];

  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Experiences' : 'Kokemukset'}</h2>
      {jobExperiences.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{job.jobName}</h3>
          <p className="text-gray-700">{job.employer}, {job.date}</p>
          <p className="text-gray-600">{job.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
