import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FeedScreen} from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {AppHeader} from '../components/AppHeader/AppHeader';
import {View} from 'react-native';
import {useGetColors} from '../hooks/useGetColors';
import FloatingButton from '../components/FloatingButton/FloatingButton';

const Tab = createMaterialTopTabNavigator();

export default function AppTopNavigator() {
  const {backgroundColor, color} = useGetColors();
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <AppHeader />
      <FloatingButton />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: backgroundColor},
          tabBarInactiveTintColor: color,
          tabBarActiveTintColor: color,
        }}>
        <Tab.Screen name="Settings" component={FeedScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}
