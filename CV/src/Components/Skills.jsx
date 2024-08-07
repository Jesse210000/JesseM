import React from 'react';

function Skills({ language }) {
  const technicalSkills = ['Web backend', 'Web frontend'];
  const softSkills = ['Python', 'PHP', 'JavaScript', 'Node.js', 'MongoDB', 'MySQL', 'CSS', 'HTML'];

  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Skills' : 'Taidot'}</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">{language === 'en' ? 'Technical Skills' : 'Tekniset taidot'}</h3>
          <ul className="list-disc list-inside space-y-2">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="text-gray-700 font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{language === 'en' ? 'Soft Skills' : 'Pehmeät taidot'}</h3>
          <ul className="list-disc list-inside space-y-2">
            {softSkills.map((skill, index) => (
              <li key={index} className="text-gray-700 font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
