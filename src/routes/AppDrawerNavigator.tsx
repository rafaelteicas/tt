import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppTopNavigator} from './AppTopNavigator';
import {useGetColors} from '../hooks/useGetColors';
import {CustomDrawerComponent} from './components/CustomDrawerComponent';

const Drawer = createDrawerNavigator();

export function AppDrawerNavigator() {
  const {backgroundColor} = useGetColors();
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerComponent}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: backgroundColor,
          width: '80%',
        },
      }}>
      <Drawer.Screen name="AppTopNavigator" component={AppTopNavigator} />
    </Drawer.Navigator>
  );
}
