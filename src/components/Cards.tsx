import { use } from 'react';
import ThemeContext from '../store/ThemeContext';
import Card from './UI/Card';

import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const Cards = () => {
  const { classes } = use(ThemeContext);

  return (
    <div className='w-full py-[10rem] px-4 bg-white text-black dark:bg-gray-200 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card
          className={classes}
          data={{
            image: Single,
            title: 'Single User',
            price: 149,
            storage: '500 GB',
            users: 1,
            sendUpTo: 2,
          }}
        />
        <Card
          middle
          className={classes}
          data={{
            image: Double,
            title: 'Partnership',
            price: 199,
            storage: '1 TB',
            users: 3,
            sendUpTo: 10,
          }}
        />
        <Card
          className={classes}
          data={{
            image: Triple,
            title: 'Group Account',
            price: 299,
            storage: '5 TB',
            users: 10,
            sendUpTo: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Cards;
