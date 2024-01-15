import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {useNavigation} from '@react-navigation/native';

export default function SearchButton() {
  const {searchBarColor, searchBarBorderColor, searchBarPlaceholderColor} =
    useGetColors();
  const navigation = useNavigation();
  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor: searchBarColor, borderColor: searchBarBorderColor},
      ]}
      onPress={() => navigation.navigate('SearchScreen')}>
      <Text style={[styles.text, {color: searchBarPlaceholderColor}]}>
        Buscar X
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.2,
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: 20,
  },
});
