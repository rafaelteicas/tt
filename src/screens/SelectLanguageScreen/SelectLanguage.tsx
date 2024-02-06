import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {AppStackNavType} from '../../routes/types';

export function SelectLanguageScreen({}: AppStackNavType<'SelectLanguageScreen'>) {
  const {backgroundColor} = useGetColors();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text>SelectLanguage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
