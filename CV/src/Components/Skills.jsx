import React from 'react';
import Star from '../assets/Star.png';
 
function Skills({ language }) {
  const softSkills = [
    'Python', 'PHP', 'JavaScript', 'Node.js', 'MongoDB', 'MySQL',
    'CSS', 'HTML'
  ];
 
  const programmingSkillsData = [
    { skillName: 'Python', stars: 5 },
    { skillName: 'JavaScript', stars: 4 },
    { skillName: 'HTML', stars: 5},
    { skillName: 'CSS', stars: 3},
    { skillName: 'React', stars: 4},
    { skillName: 'MySQL', stars: 4},
    { skillName: 'MongoDB', stars: 3},
    { skillName: 'PostgreSQL', stars: 2},
    { skillName: 'AWS', stars: 3},
    { skillName: 'Azure', stars: 3},
    { skillName: 'Figma', stars: 4},
    { skillName: 'AdobeXD', stars: 2},
    { skillName: 'Visual Studio Code', stars: 5},
    { skillName: 'Git', stars: 5},
    { skillName: 'Hosting servers', stars: 4}
  ];
 
  const calculateScore = (stars) => {
    return (
      <p className="text-gray-800 font-semibold">
        {stars}/5
      </p>
    );
  };
 
  const calculatePercent = (stars) => {
    const percent = (stars / 5) * 100;
    return percent;
  };
 
  const giveStars = (stars) => {
    const starArray = Array(stars).fill(0);
    return (
      <div className="flex space-x-1 mt-2">
        {starArray.map((_, index) => (
          <img
            key={index}
            src={Star}
            alt="Star"
            className="w-6 h-6"
          />
        ))}
      </div>
    );
  };
 
  return (
    <section className="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        {language === 'en' ? 'Skills' : 'Taidot'}
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            {language === 'en' ? 'Programming Languages' : 'Ohjelmointikielet'}
          </h3>
          <ul className="space-y-4">
            {programmingSkillsData.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-200 to-green-400 p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold text-gray-900">
                    {skill.skillName}
                  </h1>
                  {calculateScore(skill.stars)}
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-full mt-2 relative overflow-hidden">
                  <div
                    style={{ width: `${calculatePercent(skill.stars)}%` }}
                    className="bg-blue-500 h-full rounded-full flex items-center justify-center text-white font-bold text-sm"
                  >
                    {calculatePercent(skill.stars).toFixed(0)}%
                  </div>
                </div>
                {giveStars(skill.stars)}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
 
export default Skills;