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

  const classes = `ease-in-out duration-500 `;

  useEffect(() => {
    document.body.className = `${theme} ${classes}`;
    window.onkeydown = (e) => {
      if (e.key === '`') {
        toggleTheme();
      }
    };
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { classes, theme, toggleTheme, scrollToTop: handleScrollToTop };
};
