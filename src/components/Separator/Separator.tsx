import {View} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';

type Props = {
  marginTop?: number;
  marginBottom?: number;
};

export default function Separator({marginTop, marginBottom}: Props) {
  const {separatorColor} = useGetColors();
  return (
    <View
      style={{
        width: '100%',
        height: 0.3,
        backgroundColor: separatorColor,
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    />
  );
}
