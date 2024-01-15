import {useContext} from 'react';
import {FloatingButtonContext} from './FloatingButtonProvider';

export function useFloatingButton() {
  const context = useContext(FloatingButtonContext);
  return context;
}
