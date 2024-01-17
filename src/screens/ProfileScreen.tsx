import React from 'react';
import {CustomDrawerComponent} from '../routes/components/CustomDrawerComponent';
import {ScrollView} from 'react-native-gesture-handler';

export default function ProfileScreen() {
  return (
    <ScrollView style={{backgroundColor: 'red'}}>
      <CustomDrawerComponent />
    </ScrollView>
  );
}
