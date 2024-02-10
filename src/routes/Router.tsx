import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigator} from './AppStackNavigator';
import {StatusBar} from 'react-native';
import {useGetColors} from '../hooks/useGetColors';

export function Router() {
  const {backgroundColor} = useGetColors();
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </>
  );
}
