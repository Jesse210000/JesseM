import React from 'react';

function Projects({ language }) {
  const projectData = [
    {
      title: 'Cookie website 😋',
      description: language === 'en' ? 'This project was made as a school project. Please note this project only includes the frontend.' : 'Tämä projekti tehtiin kouluprojektina. Huomaa, että tämä projekti sisältää vain frontendin.',
      link: 'https://jesse210000.github.io/JesseMakela/fanikauppa/',
    },
  ];

  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Projects' : 'Projektit'}</h2>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {projectData.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-inner hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-500 hover:underline hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'en' ? 'View Project' : 'Näytä projekti'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
