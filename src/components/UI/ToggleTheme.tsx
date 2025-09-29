import { use } from 'react';
import ThemeContext from '../../store/ThemeContext';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleTheme: React.FC<Props> = ({ className, ...props }) => {
  const { theme, toggleTheme } = use(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`light:bg-dark light:text-light dark:bg-light dark:text-dark  mx-auto p-2 rounded-md font-semibold hover:cursor-pointer  ${className}`}
      {...props}
    >
      {theme === 'light' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ToggleTheme;
