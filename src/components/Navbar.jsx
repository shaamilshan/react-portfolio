import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between items-center px-12 py-5 shadow'>
        <div>
          <h4 className='font-extrabold text-xl'>Shamil.dev</h4>
        </div>
        
        {/* Hamburger Icon */}
        <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
          <svg 
            className='w-6 h-6' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24' 
            xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </div>
        
        {/* Desktop Navigation Links */}
        <ul className='hidden md:flex gap-6 font-semibold'>
  <li>
    <a href="#home" className="hover:text-blue-400">Home</a>
  </li>
  <li>
    <a href="#about" className="hover:text-blue-400">About</a>
  </li>
  <li>
    <a href="#projects" className="hover:text-blue-400">Projects</a>
  </li>
  <li>
    <a href="#contact" className="hover:text-blue-400">Contact</a>
  </li>
</ul>

      </div>

      {/* Sliding Menu */}
      <div 
  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
  <ul className='flex flex-col gap-8 p-8 font-semibold'>
    <li onClick={toggleMenu}>
      <a href="#home">Home</a>
    </li>
    <li onClick={toggleMenu}>
      <a href="#about">About</a>
    </li>
    <li onClick={toggleMenu}>
      <a href="#projects">Projects</a>
    </li>
    <li onClick={toggleMenu}>
      <a href="#contact">Contact</a>
    </li>
  </ul>
</div>


      {/* Overlay */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-black opacity-50 z-40'
          onClick={toggleMenu}>
        </div>
      )}
    </div>
  );
}

export default Navbar;
