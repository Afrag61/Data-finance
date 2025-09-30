import { use } from 'react';
import ThemeContext from '../store/ThemeContext';

import Laptop from '../assets/laptop-Photoroom.png';

const Analytics = () => {
  const { classes } = use(ThemeContext);

  return (
    <div className='w-full  py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} />
        <div className='flex flex-col justify-center'>
          <p className='uppercase text-primary font-bold '>
            Data Analytics Dashboard
          </p>
          <h1
            className={`${classes} light:text-black text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2`}
          >
            Manage Data Analytics Centrally
          </h1>
          <p className={`${classes} light:text-black text-white font-semibold`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button
            className={`${classes} text-black bg-primary light:text-black light:bg-primary w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 hover:cursor-pointer`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
