import {Text as RNText, TextProps} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';

interface Props extends TextProps {
  paragraph?: boolean;
  bold?: boolean;
}

export default function Text({children, paragraph, bold, ...textProps}: Props) {
  const {color} = useGetColors();
  return (
    <RNText
      style={{
        color: color,
        opacity: paragraph ? 0.6 : undefined,
        fontWeight: bold ? 'bold' : undefined,
      }}
      {...textProps}>
      {children}
    </RNText>
  );
}
