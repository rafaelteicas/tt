import {useColorScheme} from 'react-native';
import {theme} from '../theme/theme';

export function useGetColors() {
  const scheme = useColorScheme();
  const {colors} = theme;
  return {
    backgroundColor: scheme === 'light' ? colors.white : colors.black,
    color: scheme === 'light' ? colors.black : colors.white,
    searchBarColor: scheme === 'light' ? theme.colors.lightGray : '#202428',
    searchBarBorderColor:
      scheme === 'light' ? '#ecf0f1' : theme.colors.darkGray,
    searchBarPlaceholderColor: scheme === 'light' ? '#6d777e' : '#787b80',
  };
}
