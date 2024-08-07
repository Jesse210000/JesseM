import React from 'react';

function Summary({ language }) {
  return (
    <section className="my-8 p-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">{language === 'en' ? 'Summary' : 'Yhteenveto'}</h2>
      <p className="text-lg">
        {language === 'en' 
          ? 'As a software developer student with a passion for technology, I thrive on international challenges. Eager for fresh experiences, I specialize in programming and am prepared to contribute innovative solutions for various projects.' 
          : 'Olen ohjelmistokehittäjäopiskelija, joka on innostunut teknologiasta ja viihtyy kansainvälisten haasteiden parissa. Olen innokas saamaan uusia kokemuksia, erikoistun ohjelmointiin ja olen valmis tuomaan innovatiivisia ratkaisuja erilaisiin projekteihin.'}
      </p>
    </section>
  );
}

export default Summary;
