import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';

type Props = {
  marginTop?: number;
  marginBottom?: number;
  style?: StyleProp<ViewStyle>;
};

export function Separator({marginTop, marginBottom, style}: Props) {
  const {separatorColor} = useGetColors();
  return (
    <View
      style={[
        style,
        {
          width: '100%',
          height: 0.3,
          backgroundColor: separatorColor,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}
    />
  );
}
