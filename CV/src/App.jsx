import React, { useState } from 'react';
import './App.css';
import LanguageToggle from './components/LanguageToggle';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './Components/footer';
function App() {
  const [language, setLanguage] = useState(null); // Language is null until selected

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  if (!language) {
    return (
      <div className="App bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
        <LanguageToggle onLanguageChange={handleLanguageChange} />
      </div>
    );
  }

  return (
    <div className="App bg-gradient-to-br from-gray-900 to-gray-700 min-h-screen text-white">
      <div className="animated-bg">
        <Header language={language} />
        <div className="animated-sections space-y-10 container mx-auto px-4">
          <Summary language={language} />
          <Experience language={language} />
          <Education language={language} />
          <Projects language={language} />
          <Skills language={language} />
        </div>
      </div>
      <Footer language={language} />
    </div>
  );
}

export default App;
