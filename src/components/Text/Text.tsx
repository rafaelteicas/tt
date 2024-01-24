import {Text as RNText, TextProps} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';

interface Props extends TextProps {
  paragraph?: boolean;
  bold?: boolean;
  fontSize?: number;
}

export default function Text({
  children,
  paragraph,
  bold,
  fontSize,
  style,
  ...textProps
}: Props) {
  const {color} = useGetColors();
  return (
    <RNText
      {...textProps}
      style={[
        {
          color: color,
          opacity: paragraph ? 0.6 : undefined,
          fontWeight: bold ? 'bold' : undefined,
          fontSize,
        },
        style,
      ]}>
      {children}
    </RNText>
  );
}
