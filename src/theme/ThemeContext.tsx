import React, { createContext, useContext } from 'react';
import { ThemeConfig } from '../types/sdui';

type ThemeContextType = {
  theme: ThemeConfig;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children: React.ReactNode;
  theme: ThemeConfig;
};

export const ThemeProvider = ({ children, theme }: Props) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context.theme;
};