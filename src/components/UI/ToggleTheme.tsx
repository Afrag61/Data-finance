import { use } from 'react';
import ThemeContext from '../../store/ThemeContext';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleTheme: React.FC<Props> = ({ className, ...props }) => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`text-sm md:text-base  light:bg-dark light:text-light dark:bg-light dark:text-dark  mx-auto p-2 rounded-md font-semibold hover:cursor-pointer hover:scale-105 ease-in-out duration-500 focus:outline-none ${className}`}
      {...props}
    >
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ToggleTheme;
