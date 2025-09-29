import { ReactTyped } from 'react-typed';

import { use } from 'react';
import ThemeContext from '../store/ThemeContext';

const Hero = () => {
  const { theme, classes } = use(ThemeContext);

  return (
    <div className={`${theme} ${classes} text-white`}>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-primary font-bold p-2'>
          Growing with Data Analytics
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with Data.
        </h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for{' '}
            <ReactTyped
              className={`text-primary`}
              strings={['BTB', 'BTC', 'SASS']}
              loop
              typeSpeed={120}
              backSpeed={130}
            />
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 mx-4'>
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button
          className={`${classes} w-[200px]  bg-primary text-black font-semibold my-6 mx-auto p-3 rounded-md hover:cursor-pointer hover:scale-105`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
