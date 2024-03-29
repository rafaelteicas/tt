import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function useSafeArea() {
  let {top, bottom} = useSafeAreaInsets();
  if (top < 50) {
    return {
      top: 10,
      bottom: 20,
    };
  }
  return {
    top,
    bottom,
  };
}
