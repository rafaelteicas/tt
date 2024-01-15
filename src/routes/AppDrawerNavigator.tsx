import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppTopNavigator from './AppTopNavigator';
import {useGetColors} from '../hooks/useGetColors';
import {CustomDrawerComponent} from './components/CustomDrawerComponent';

const Drawer = createDrawerNavigator();

export default function AppDrawerNavigator() {
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
        },
      }}>
      <Drawer.Screen name="FeedScreen" component={AppTopNavigator} />
    </Drawer.Navigator>
  );
}
