import { use } from 'react';
import ThemeContext from '../store/ThemeContext';

const NewsLetter = () => {
  const { classes } = use(ThemeContext);

  return (
    <div className='w-full py-16 px-6'>
      <div className='max-w=[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className={`${classes} bg-white light:bg-gray-300 p-3 flex w-full rounded-md text-black font-semibold focus:outline-none`}
              type='email'
              placeholder='Your Email'
            />
            <button
              className={`${classes} bg-primary text-black rounded-md font-semibold w-[200px] ml-4 my-6 px-6 py-3 hover:cursor-pointer hover:scale-105 `}
            >
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-primary'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
