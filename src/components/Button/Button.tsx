import React from 'react';
import {ButtonProps, StyleSheet, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useGetColors} from '../../hooks/useGetColors';
import {theme} from '../../theme/theme';

interface Props extends ButtonProps {
  title: string;
  outline?: boolean;
}

export default function Button({title, outline}: Props) {
  const {color} = useGetColors();
  return (
    <TouchableWithoutFeedback
      style={[
        styles.container,
        {
          backgroundColor: outline ? undefined : theme.colors.blue,
          borderWidth: outline ? 2 : undefined,
          borderColor: outline ? theme.colors.lightGray : undefined,
        },
      ]}>
      <Text style={[styles.text, {color: outline ? color : '#FFF'}]}>
        {title}
      </Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
