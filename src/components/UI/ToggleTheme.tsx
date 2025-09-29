import { use } from 'react';
import { AiFillMoon, AiFillSun } from 'react-icons/ai';
import ThemeContext from '../../store/ThemeContext';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleTheme: React.FC<Props> = ({ className, ...props }) => {
  const { theme, classes, toggleTheme } = use(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-0 right-0 m-6 text-sm md:text-base light:bg-dark light:text-light dark:bg-light dark:text-dark  p-2 rounded-full font-semibold hover:cursor-pointer hover:scale-105 focus:outline-none ${classes} ${className}`}
      {...props}
    >
      {theme === 'light' ? (
        <AiFillMoon className='md:size-8' size={25} />
      ) : (
        <AiFillSun className='md:size-8' size={25} />
      )}
    </button>
  );
};

export default ToggleTheme;
