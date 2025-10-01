import { use } from 'react';
import ThemeContext from '../store/ThemeContext';

import {
  FaDribbble,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  const { classes } = use(ThemeContext);

  return (
    <div
      className={`${classes} max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 light:text-gray-600 light:border-t border-gray-300`}
    >
      <div>
        <h1 className='w-full text-3xl font-bold text-primary'>REACT.</h1>
        <p className='py-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaGithub size={30} />
          <FaDribbble size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-8'>
        <div>
          <h6 className='font-semibold text-gray-400 light:text-gray-500'>
            Solutions
          </h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-semibold text-gray-400 light:text-gray-500'>
            Support
          </h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-semibold text-gray-400 light:text-gray-500'>
            Company
          </h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-semibold text-gray-400 light:text-gray-500'>
            Legal
          </h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
