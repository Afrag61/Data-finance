import { useEffect, useState } from 'react';
import type { TThemeContext } from '../types';

const getTheme = (): TThemeContext['theme'] => {
  const currentTheme = localStorage.getItem('theme') as TThemeContext['theme'];
  if (!currentTheme) {
    return 'dark';
  }
  return currentTheme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<TThemeContext['theme']>(getTheme);

  const classes = `${theme} ease-in-out duration-500 `;

  useEffect(() => {
    document.body.className = classes;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
