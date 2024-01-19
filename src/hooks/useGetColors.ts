import {theme} from '../theme/theme';
import {useThemeProvider} from '../services/ThemeProvider/useThemeProvider';

export function useGetColors() {
  const {colorScheme, darkMode} = useThemeProvider();

  const {colors} = theme;
  return {
    backgroundColor:
      colorScheme === 'light'
        ? colors.white
        : darkMode === 'dark'
        ? colors.black
        : colors.darkBlue,
    color: colorScheme === 'light' ? colors.black : colors.white,
    searchBarColor: theme.colors.darkGray,
    searchBarBorderColor:
      colorScheme === 'light' ? '#ecf0f1' : theme.colors.darkGray,
    searchBarPlaceholderColor: colorScheme === 'light' ? '#6d777e' : '#787b80',
    separatorColor:
      colorScheme === 'dark'
        ? theme.colors.darkThemeSeparator
        : theme.colors.lightThemeSeparator,
    rippleColor:
      colorScheme === 'dark'
        ? theme.colors.darkThemeSeparator
        : theme.colors.lightThemeSeparator,
  };
}
