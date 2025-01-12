import React from 'react';

function Projects({ language }) {
  const projects = [
    {
      title: 'Cozy Creations',
      description: language === 'en' 
        ? 'A live website for business programmed using Django framework. (Python) '
        : 'Verkkokauppa yritykselle ohjelmoitu käyttäen Django-ohjelmistoa. (Python)',
      link: 'https://eleve.ink/',
    },
    {
      title: 'Cookies 😋',
      description: language === 'en'
      ? 'A personal project showcasing my frontend development skills using React. The project is a fan merchandise store prototype, featuring a modern design, dynamic components, and responsive layout. It demonstrates my ability to create user-friendly interfaces and efficiently manage component-based architecture.'
      : 'Henkilökohtainen projektini, jossa esittelen front-end-kehitystaitojani Reactin avulla. Projekti on fanituotekaupan prototyyppi, joka sisältää modernin ulkoasun, dynaamisia komponentteja ja responsiivisen rakenteen. Se osoittaa kykyni luoda käyttäjäystävällisiä käyttöliittymiä ja hallita tehokkaasti komponenttipohjaista arkkitehtuuria.',
      link: 'https://jesse210000.github.io/JesseMakela/fanikauppa/',

    },
    {
      title: 'Tredun Älykoti',
      description: language === 'en' 
        ? 'I was a part of the developers in Tredu smarthome project. (React)'
        : 'Olin yksi kehittäjistä Tredun älykotiprojektissa. (React)',
      link: 'https://smarthome.node.treok.io/',
    },

  ];

  return (
    <section className="projects bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Projects' : 'Projektit'}</h2>
      <div className="mt-4 border-t border-gray-600 pt-2 text-sm text-gray-400">
        <i>
          {language === 'en'
            ? "Some of the projects are being run on my configured server. (Linux server)"
            : "Osa projekteistani pyörii Linux-palvelimellani."}
          </i>
          </div>
          <br />
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {language === 'en' ? 'View Project' : 'Näytä projekti'}
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;