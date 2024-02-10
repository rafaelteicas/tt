import React from 'react';
import {
  TextInput as MaterialTextInput,
  TextInputProps,
} from 'react-native-paper';
import {useGetColors} from '../../hooks/useGetColors';
import {theme} from '../../theme/theme';

interface Props extends TextInputProps {
  label: string;
  onPress?: () => void;
}

export function TextInput({label, onPress, ...textInputProps}: Props) {
  const {color, backgroundColor} = useGetColors();
  return (
    <MaterialTextInput
      selectionColor={theme.colors.blue}
      activeOutlineColor={theme.colors.blue}
      mode="outlined"
      style={{backgroundColor}}
      label={label}
      textColor={color}
      outlineColor={color}
      onPressIn={onPress}
      {...textInputProps}
    />
  );
}
