import {useContext} from 'react';
import {ThemeContext} from './ThemeProvider';

export function useThemeProvider() {
  const context = useContext(ThemeContext);
  return context;
}
