import { use, useState } from 'react';
import ToggleTheme from './UI/ToggleTheme';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ThemeContext from '../store/ThemeContext';
import ToTop from './UI/ToTop';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { classes } = use(ThemeContext);

  const handleToggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <ToggleTheme />
      <ToTop />
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto'>
        <h1 className='w-1/2 px-4 text-3xl font-bold text-primary'>REACT.</h1>
        <ul className='hidden md:flex font-semibold'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
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
              ? `fixed left-0 top-0 w-[60%] dark:text-primary border-r border-r-light light:border-dark h-full bg-transparent backdrop-blur-xl ${classes}`
              : `fixed left-[-100%] ${classes}`
          }
        >
          <h1 className='w-full text-3xl font-bold text-primary m-4'>REACT.</h1>
          <ul className='uppercase p-4 font-semibold'>
            <li className='p-4 border-b dark:border-light light:border-dark'>
              Home
            </li>
            <li className='p-4 border-b dark:border-light light:border-dark'>
              Company
            </li>
            <li className='p-4 border-b dark:border-light light:border-dark'>
              Resources
            </li>
            <li className='p-4 border-b dark:border-light light:border-dark'>
              About
            </li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Navbar;
