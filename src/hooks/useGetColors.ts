import {theme} from '../theme/theme';
import {useThemeProvider} from '../services/ThemeProvider/useThemeProvider';

export function useGetColors() {
  const {colorScheme} = useThemeProvider();

  const {colors} = theme;
  return {
    backgroundColor: colorScheme === 'light' ? colors.white : colors.black,
    color: colorScheme === 'light' ? colors.black : colors.white,
    searchBarColor:
      colorScheme === 'light' ? theme.colors.lightGray : '#202428',
    searchBarBorderColor:
      colorScheme === 'light' ? '#ecf0f1' : theme.colors.darkGray,
    searchBarPlaceholderColor: colorScheme === 'light' ? '#6d777e' : '#787b80',
  };
}
