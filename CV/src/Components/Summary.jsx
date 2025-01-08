import React from 'react';

function Summary({ language }) {
  return (
    <section className="experience bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4">{language === 'en' ? 'Introduction' : 'Esittely'}</h2>
      <p className="text-lg">
        {language === 'en'
          ? 'I am a dedicated software developer with a strong background and interest in web and game development. I thrive on solving complex problems and am always eager to learn new technologies. With expertise in many program languages, I have a versatile skill set to bring innovative ideas to life. My passion lies in creating efficient, user-friendly applications and contributing to impactful projects.'
          : 'Olen omistautunut ohjelmistokehittäjä, jolla on vahva tausta ja mielenkiinto web- ja pelikehitykseen. Pidän haasteiden ratkaisemisesta ja uusien teknologioiden oppimisesta. Hallitsen monia ohjelmointialustoja, ja minulla on monipuolinen taitovalikoima, jolla voin toteuttaa innovatiivisia ideoita. Intohimoni on luoda tehokkaita ja käyttäjäystävällisiä sovelluksia sekä osallistua merkityksellisiin projekteihin.'}
      </p>
    </section>
  );
}

export default Summary;
