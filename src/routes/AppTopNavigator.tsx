import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ForYouScreen} from '../screens/ForYouScreen/ForYouScreen';
import {AppHeader} from '../components/AppHeader/AppHeader';
import {View} from 'react-native';
import {useGetColors} from '../hooks/useGetColors';
import {CustomAppTopNavigator} from './components/CustomAppTopNavigator';

const Tab = createMaterialTopTabNavigator();

export default function AppTopNavigator() {
  const {backgroundColor, color} = useGetColors();
  return (
    <View style={{flex: 1, backgroundColor: backgroundColor}}>
      <AppHeader />
      <Tab.Navigator
        tabBar={props => <CustomAppTopNavigator {...props} />}
        screenOptions={{
          tabBarInactiveTintColor: color,
          tabBarActiveTintColor: color,
        }}>
        <Tab.Screen
          name="ForYouScreen"
          component={ForYouScreen}
          options={{
            title: 'For you',
          }}
        />
        <Tab.Screen
          name="TrendingScreen"
          component={ForYouScreen}
          options={{
            title: 'Trending',
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
