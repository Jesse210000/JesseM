import React from 'react';

function Header({ language }) {
  const contactInfo = {
    email: 'jesse.makela13@gmail.com',
    phone: '+358 0465712319',
    picture: 'https://media.licdn.com/dms/image/D5603AQGAL010La0Uzg/profile-displayphoto-shrink_800_800/0/1718272776133?e=1728518400&v=beta&t=j0s4F8PTxmJb_wnxIjP71x_GbL4U0rpqOzQ6q5f648A', 
  };

  return (
    <header className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
      <img
        src={contactInfo.picture}
        alt="Jesse Mäkelä"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold underline mb-2">Jesse Mäkelä</h1>
      <h2 className="text-xl mb-2">
        {language === 'en' ? 'Software Developer' : 'Ohjelmistokehittäjä'}
      </h2>
      <p className="text-gray-700 mb-1">
        {language === 'en' ? 'Contact Information' : 'Yhteystiedot'}
      </p>
      <p className="text-gray-700">
        {contactInfo.email}
      </p>
      <p className="text-gray-700 mb-4">
        {contactInfo.phone}
      </p>
    </header>
  );
}

export default Header;
