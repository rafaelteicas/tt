import React from 'react';
import {ButtonProps, StyleSheet, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useGetColors} from '../../hooks/useGetColors';
import {theme} from '../../theme/theme';

interface Props extends ButtonProps {
  title: string;
  outline?: boolean;
  onPress?: () => void;
}

export function Button({title, outline, onPress}: Props) {
  const {color} = useGetColors();
  return (
    <TouchableWithoutFeedback
      style={[
        styles.container,
        {
          backgroundColor: outline ? undefined : theme.colors.blue,
          borderWidth: outline ? 1 : undefined,
          borderColor: outline ? theme.colors.darkGray : undefined,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.text, {color: outline ? color : '#FFF'}]}>
        {title}
      </Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
