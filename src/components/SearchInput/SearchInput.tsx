import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {TextInput} from 'react-native-gesture-handler';
import {Icon} from '../Icon/Icon';

export function SearchInput() {
  const {searchBarColor, searchBarBorderColor, searchBarPlaceholderColor} =
    useGetColors();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: searchBarColor, borderColor: searchBarBorderColor},
      ]}>
      <Icon name="search" color={searchBarPlaceholderColor} />
      <TextInput
        placeholder="Buscar idiomas"
        placeholderTextColor={searchBarPlaceholderColor}
        style={{fontSize: 16}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    minHeight: 42,
    borderWidth: 0.2,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
