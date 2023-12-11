import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Sobre Nós', to:'/about'},
    { id: 2, text: 'Contato', to: '/contact' },
    { id: 3, text: 'Quiz', to: '/quiz'},
  ];

  return (
    <div className='bg-[#07031C] flex justify-between items-center h-24 w-full mx-auto px-4 text-white z-50'>
      {/* Logo */}
      <Link to={'/'} className='w-full text-3xl font-bold text-[#9D06FF] ml-[2%] cursor-pointer'>Logo.</Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex '>
        {navItems.map(item => (
          <li
            key={item.id}
            className='px-5 hover:bg-[#9D06FF] rounded-xl m-2 cursor-pointer duration-300 hover:text-black w-48 h-10 flex items-center justify-center'
          >
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#07031C] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <Link to='/' className='w-full text-3xl font-bold text-[#9D06FF] m-4'>Logo.</Link>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='z-50 p-4 border-b rounded-xl hover:bg-[#9D06FF] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;