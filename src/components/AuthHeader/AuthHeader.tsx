import {StyleSheet, View} from 'react-native';
import React from 'react';
import Icon from '../Icon/Icon';
import {useGetColors} from '../../hooks/useGetColors';
import Logo from '../../assets/Logo';

const ICON_SIZE = 28;

type Props = {
  onPressCloseIcon?: () => void;
};

export default function AuthHeader({onPressCloseIcon}: Props) {
  const {color} = useGetColors();
  return (
    <View style={styles.container}>
      <Icon
        name="close-outline"
        color={color}
        size={ICON_SIZE}
        onPress={onPressCloseIcon}
      />
      <Logo />
      <View style={styles.hiddenView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  hiddenView: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
