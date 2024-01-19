import {TextProps} from 'react-native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useGetColors} from '../../hooks/useGetColors';
import Animated from 'react-native-reanimated';

interface Props extends TextProps {
  name: string;
  size?: number;
  color?: any;
}

export default function Icon({name, size = 20, color, ...textProps}: Props) {
  const AnimatedIcon = Animated.createAnimatedComponent(IonIcons);
  const colors = useGetColors();
  return (
    <AnimatedIcon
      name={name}
      size={size}
      color={color ? color : colors.color}
      {...textProps}
    />
  );
}
