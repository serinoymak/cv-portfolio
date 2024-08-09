import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profil from '../images/profil.png';
import { FaBars, FaTimes } from 'react-icons/fa';

// Profil resminin boyutları farklı ekran boyutlarına göre ayarlandı.
// Menü öğeleri md:flex hidden sınıfları ile sadece orta ve büyük ekranlarda gösteriliyor, küçük ekranlarda gizleniyor.
// Hamburger menüsü sadece küçük ekranlarda gösteriliyor.
// Hamburger Menüsü Butonuna tıklanınca menünün açılıp kapanmasını sağlayan toggleMenu fonksiyonu eklendi.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <img src={profil} alt="Profil" className="h-20 md:h-32 mr-4 ml-2 md:ml-40" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black text-md hover:text-gray-400">Home</Link>
          <Link to="/cv" className="text-black text-md hover:text-gray-400">CV</Link>
          <Link to="/school-projects" className="text-black text-md hover:text-gray-400">School Projects</Link>
          <Link to="/freelance" className="text-black text-md hover:text-gray-400">Freelance</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block text-black text-md hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          <Link to="/cv" className="block text-black text-md hover:text-gray-400" onClick={toggleMenu}>CV</Link>
          <Link to="/school-projects" className="block text-black text-md hover:text-gray-400" onClick={toggleMenu}>School Projects</Link>
          <Link to="/freelance" className="block text-black text-md hover:text-gray-400" onClick={toggleMenu}>Freelance</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
