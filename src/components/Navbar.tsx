import { use, useState } from 'react';
import ToggleTheme from './UI/ToggleTheme';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ThemeContext from '../store/ThemeContext';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = use(ThemeContext);

  const handleToggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto'>
      <h1 className='w-1/2 px-4 text-3xl font-bold text-primary'>REACT.</h1>
      <ul className='hidden md:flex font-semibold'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <ToggleTheme />
      <div
        className='block md:hidden hover:cursor-pointer px-4'
        onClick={handleToggleNav}
      >
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* {isOpen && ( */}
      <div
        className={
          isOpen
            ? `${
                theme === 'dark' ? 'bg-dark' : 'bg-gray-300'
              } fixed left-0 top-0 w-[60%] border-r border-r-primary light:border-secondary h-full ease-in-out duration-500 `
            : 'fixed left-[-100%] ease-in-out duration-500'
        }
      >
        <h1 className='w-full text-3xl font-bold text-primary m-4'>REACT.</h1>
        <ul className='uppercase p-4 font-semibold'>
          <li className='p-4 border-b border-primary light:border-secondary'>
            Home
          </li>
          <li className='p-4 border-b border-primary light:border-secondary'>
            Company
          </li>
          <li className='p-4 border-b border-primary light:border-secondary'>
            Resources
          </li>
          <li className='p-4 border-b border-primary light:border-secondary'>
            About
          </li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;
