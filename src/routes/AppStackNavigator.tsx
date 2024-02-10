import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppDrawerNavigator} from './AppDrawerNavigator';
import {SearchScreen} from '../screens/SearchScreen/SearchScreen';
import {CreateAccountScreen} from '../screens/CreateAccountScreen/CreateAccountScreen';
import {ProfileScreen} from '../screens/ProfileScreen/ProfileScreen';
import {SelectLanguageScreen} from '../screens/SelectLanguageScreen/SelectLanguage';
import {AccountDataScreen} from '../screens/AccountDataScreen/AccountDataScreen';
import PasswordScreen from '../screens/PasswordScreen/PasswordScreen';

export type StackTypes = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  CreateAccountScreen: {
    text: string;
    hide?: false | boolean;
  };
  ProfileScreen: {
    id: number;
  };
  SelectLanguageScreen: undefined;
  AccountDataScreen: undefined;
  PasswordScreen: {
    email: string;
    birthday: string;
    name: string;
  };
};

const Stack = createNativeStackNavigator<StackTypes>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="SelectLanguageScreen"
        component={SelectLanguageScreen}
      />
      <Stack.Screen name="AccountDataScreen" component={AccountDataScreen} />
      <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
    </Stack.Navigator>
  );
}
