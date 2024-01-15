import {View} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';

export default function Separator() {
  return (
    <View
      style={{
        width: '100%',
        height: 0.3,
        backgroundColor: theme.colors.lightGray,
      }}
    />
  );
}
