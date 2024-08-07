import React, { useState } from 'react';
import './App.css';
import LanguageToggle from './Components/LanguageToggle.jsx';
import Header from './Components/Header.jsx';
import Summary from './Components/Summary.jsx';
import Experience from './Components/Experience.jsx';
import Education from './Components/Education.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Certifications from './Components/Certifications.jsx';

function App() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <LanguageToggle onLanguageChange={handleLanguageChange} />
      <Header language={language} />
      <Summary language={language} />
      <Experience language={language} />
      <Education language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Certifications language={language} />
    </div>
  );
}

export default App;
