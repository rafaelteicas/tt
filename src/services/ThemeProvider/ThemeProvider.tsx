import React, {createContext, useEffect, useState} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';

type Themes = 'light' | 'dark' | 'system';

type DarkModeTypes = 'dark' | 'darkBlue';

type ThemeService = {
  colorScheme: ColorSchemeName;
  theme: Themes;
  changeColorScheme: (colorScheme: Themes) => void;
  darkMode: DarkModeTypes;
  changeDarkMode: (darkMode: DarkModeTypes) => void;
};

export const ThemeContext = createContext<ThemeService>({} as ThemeService);

export default function ThemeProvider({children}: React.PropsWithChildren) {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>();
  const [theme, setTheme] = useState<Themes>('system');
  const [darkMode, setDarkMode] = useState<DarkModeTypes>('dark');

  useEffect(() => {
    if (!colorScheme || theme === 'system') {
      setColorScheme(systemColorScheme);
    }
  }, [colorScheme, systemColorScheme, theme]);

  function changeColorScheme(_colorScheme: Themes) {
    if (_colorScheme !== 'system') {
      setColorScheme(_colorScheme);
      setTheme(_colorScheme);
    }
  }

  function changeDarkMode(_darkMode: DarkModeTypes) {
    setDarkMode(_darkMode);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorScheme,
        darkMode,
        changeDarkMode,
        changeColorScheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
