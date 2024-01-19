import React from 'react';
import {Image} from 'react-native';
import {useGetColors} from '../hooks/useGetColors';

type Props = {
  width?: number;
  height?: number;
};

export default function Logo({width = 22, height = 22}: Props) {
  const {color} = useGetColors();
  return (
    <Image
      source={require('./Logo.png')}
      style={{width, height}}
      alt="Logo Twitter"
      tintColor={color}
    />
  );
}
