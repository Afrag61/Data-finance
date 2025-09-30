import { use } from 'react';
import ThemeContext from '../../store/ThemeContext';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ToTop = () => {
  const { classes, scrollToTop } = use(ThemeContext);

  return (
    <button
      onClick={scrollToTop}
      className={`${classes} text-black bg-primary fixed bottom-0 left-0 m-6 p-2 rounded-full hover:scale-105 hover:cursor-pointer focus:outline-none`}
    >
      <AiOutlineArrowUp className='md:size-8' size={25} />
    </button>
  );
};

export default ToTop;
