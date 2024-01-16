import React, {createContext, useEffect, useState} from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {asyncStorage} from '../Storage/asyncStorage';

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

const THEME_KEY = '@Theme';
const THEME_DARK_KEY = '@ThemeDark';

export default function ThemeProvider({children}: React.PropsWithChildren) {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>();
  const [theme, setTheme] = useState<Themes>('system');
  const [darkMode, setDarkMode] = useState<DarkModeTypes>('dark');

  console.log(systemColorScheme);

  async function getTheme() {
    try {
      const theme = await asyncStorage.getItem<Themes>(THEME_KEY);
      if (!theme || theme === 'system') {
        setColorScheme(systemColorScheme);
      }
      if (theme !== 'system' && theme) {
        setTheme(theme);
        setColorScheme(theme);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (theme === 'system') {
      setColorScheme(systemColorScheme);
    }
  }, [systemColorScheme, theme]);

  useEffect(() => {
    getTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getDarkTheme() {
    const darkTheme = await asyncStorage.getItem<DarkModeTypes>(THEME_DARK_KEY);
    if (darkTheme) {
      setDarkMode(darkTheme);
    } else {
      setDarkMode('dark');
    }
  }

  useEffect(() => {
    getDarkTheme();
  }, [darkMode]);

  async function changeColorScheme(_colorScheme: Themes) {
    await asyncStorage.setItem(THEME_KEY, _colorScheme);
    if (_colorScheme !== 'system') {
      setColorScheme(_colorScheme);
      setTheme(_colorScheme);
    }
  }

  async function changeDarkMode(_darkMode: DarkModeTypes) {
    setDarkMode(_darkMode);
    await asyncStorage.setItem(THEME_DARK_KEY, _darkMode);
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
