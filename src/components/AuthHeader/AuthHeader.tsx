import {StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';
import {Icon} from '../Icon/Icon';
import {useGetColors} from '../../hooks/useGetColors';
import Logo from '../../assets/Logo';

const ICON_SIZE = 20;

type Props = {
  onPressIcon?: () => void;
  icon?: 'close-outline' | 'arrow-back';
};

export function AuthHeader({onPressIcon, icon = 'close-outline'}: Props) {
  const {color, rippleColor} = useGetColors();
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, true)}
        style={{width: ICON_SIZE, height: ICON_SIZE, padding: 20}}>
        <Icon
          name={icon}
          color={color}
          size={ICON_SIZE}
          onPress={onPressIcon}
        />
      </TouchableNativeFeedback>
      <Logo />
      <View style={styles.hiddenView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  hiddenView: {
    width: ICON_SIZE,
    height: ICON_SIZE,
  },
});
