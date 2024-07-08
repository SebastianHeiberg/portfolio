import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <nav className={`flex items-center justify-between p-5 bg-white rounded-t-lg ${isOpen ? '' : 'rounded-b-lg'} mx-5 mt-3 shadow-lg`}>
        <div className="text-black">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="2x" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/about" className="py-2 text-black hover:bg-gray-200 whitespace-nowrap">
            Projekter
          </Link>
          <Link to="/about" className="py-2 text-black hover:bg-gray-200 whitespace-nowrap">
            Om mig
          </Link>
          <Link to="/Contact" className="py-2 text-black hover:bg-gray-200 whitespace-nowrap">
            Kontakt
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </button>
        </div>
      </nav>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden flex flex-col space-y-4 bg-white rounded-b-lg mx-5`}>
        <Link to="/about" className="py-2 px-4 text-black hover:bg-gray-200 whitespace-nowrap" onClick={() => setIsOpen(false)}>
          Projekter
        </Link>
        <Link to="/about" className="py-2 px-4 text-black hover:bg-gray-200 whitespace-nowrap" onClick={() => setIsOpen(false)}>
          Om mig
        </Link>
        <Link to="/Contact" className="py-2 pb-2 px-4 text-black hover:bg-gray-200 whitespace-nowrap" onClick={() => setIsOpen(false)}>
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default Navbar;