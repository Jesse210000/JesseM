import React from 'react';

function Skills({ language }) {
  const skills = [
    { name: 'JavaScript', level: 4 },
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'Django', level: 4 },
    { name: 'C#', level: 4 },
    { name: 'Angular', level: 3 },
    { name: 'React', level: 4 },
    { name: 'WordPress', level: 3 },
    { name: 'SQL', level: 3 },
    { name: 'C#', level: 3 },
    { name: 'Linux Web Hosting', level: 4 },
  ];

  return (
    <section className="skills bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-white mb-6">
        {language === 'en' ? 'Programming languages' : 'Ohjelmointikielet'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card bg-gray-700 p-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-400">{skill.name}</h3>
            <div className="w-full bg-gray-800 rounded-full h-4 mt-2">
              <div
                className="bg-yellow-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${skill.level * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
