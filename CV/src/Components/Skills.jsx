import React from 'react';

function Skills({ language }) {
  const skills = [
    { name: 'JavaScript', level: 4 },
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'Django', level: 3 },
    { name: 'C#', level: 3 },
    { name: 'Angular', level: 3 },
    { name: 'React', level: 4 },
    { name: 'WordPress', level: 3 },
    { name: 'SQL', level: 3 },
    { name: 'Linux Web Hosting', level: 4 },
  ];

  return (
    <section className="skills bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-white mb-6">
        {language === 'en' ? 'Programming languages' : 'Ohjelmointikielet'}
      </h2>
      <p className="mt-4 border-t border-gray-600 pt-2 text-sm text-gray-400">
        {language === 'en'
          ? 'The more the bar is filled, the more proficient I am in the language. (1-5)'
          : 'Mitä enemmän baari on täytetty, sitä parempi olen kyseisessä kielessä.'}
      </p>
      <br />
      <ul className="text-gray-300 mt-2 mb-6">
      {language === 'en' ? (
        <>
        <li>5 = Proficient</li>
        <li>4 = Skilled</li>
        <li>3 = Good</li>
        <li>2 = Beginner</li>
        <li>1 = Novice</li>
      </>
    ) : (
      <>
        <li>5 = Erittäin taitava</li>
        <li>4 = Taitava</li>
        <li>3 = Hyvä</li>
        <li>2 = Aloittelija</li>
        <li>1 = Alkeet</li>
    </>
  )}
</ul>

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
            <p className="text-sm text-gray-400 mt-2">
              {language === 'en'
                ? `Skill level: ${skill.level}/5`
                : `Taitotaso: ${skill.level}/5`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
