import { createContext } from 'react';
import type { TThemeContext } from './../types';
import { useTheme } from '../hooks/useTheme';

const initialState: TThemeContext = {
  classes: 'ease-in-out duration-500 ',
  theme: 'dark',
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialState);

export default ThemeContext;

interface Props {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const { theme, classes, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, classes }}>
      {children}
    </ThemeContext.Provider>
  );
};
