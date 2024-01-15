import {View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchButton from '../SearchButton/SearchButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {useGetColors} from '../../hooks/useGetColors';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const ICON_SIZE = 25;

export function AppHeader() {
  const {color} = useGetColors();
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[{marginTop: top}, styles.container]}>
      <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
        <Icon
          name="person-circle-outline"
          color={color}
          size={ICON_SIZE}
          style={{paddingRight: 20}}
        />
      </Pressable>
      <SearchButton />
      <Icon
        name="settings-outline"
        color={color}
        size={ICON_SIZE - 3}
        style={{paddingLeft: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
