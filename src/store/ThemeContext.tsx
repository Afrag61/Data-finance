import { createContext } from 'react';
import type { TThemeContext } from './../types';
import { useTheme } from '../hooks/useTheme';

const initialState: TThemeContext = {
  theme: 'dark',
  toggleTheme: () => {},
};

const ThemeContext = createContext(initialState);

export default ThemeContext;

interface Props {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
