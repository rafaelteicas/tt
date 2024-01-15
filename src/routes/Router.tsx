import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';

export function Router() {
  return (
    <>
      <NavigationContainer>
        <AppStackNavigator />
      </NavigationContainer>
    </>
  );
}
