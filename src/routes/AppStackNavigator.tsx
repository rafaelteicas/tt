import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppDrawerNavigator from './AppDrawerNavigator';
import SearchScreen from '../screens/SearchScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';

export type StackTypes = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  CreateAccountScreen: {
    text: string;
    hide?: false | boolean;
  };
};

const Stack = createNativeStackNavigator<StackTypes>();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={AppDrawerNavigator} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
    </Stack.Navigator>
  );
}
