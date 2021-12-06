import React, { createContext, useContext, ReactNode } from 'react';

import { defaultTheme } from '@constants';

export const ThemeContext = createContext(defaultTheme);

type ThemeProviderProps = { value: any; children: ReactNode };

export const ThemeProvider = ({ value, children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}
