import React from 'react';
import profileImage from '../assets/MyPhoto.webp';
import '../Header.css';

function Header({ language }) {
  return (
    <header className="header-container flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-10">
      <img
        src={profileImage}
        alt="Jesse Mäkelä"
        className="profile-pic w-32 h-32 rounded-full shadow-lg border-4 border-white"
      />
      <h1 className="name text-4xl font-bold mt-4">Jesse Mäkelä</h1>
      <h2 className="text-xl font-medium mt-2">
        {language === 'en' ? 'Software Developer' : 'Ohjelmistokehittäjä'}
      </h2>
      <br />
      <i>jesse.makela13@gmail.com</i>
      <i>+358 465712319</i>
    </header>
  );
}

export default Header;
