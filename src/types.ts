export interface TThemeContext {
  classes: string;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  scrollToTop: () => void;
}
