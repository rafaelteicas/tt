import React from 'react';
import {
  TextInput as MaterialTextInput,
  TextInputProps,
} from 'react-native-paper';
import {useGetColors} from '../../hooks/useGetColors';
import {theme} from '../../theme/theme';
import {Text} from '..';

interface Props extends TextInputProps {
  label: string;
  onPress?: () => void;
  errorMessage?: string;
}

export function TextInput({
  label,
  onPress,
  errorMessage,
  ...textInputProps
}: Props) {
  const {color, backgroundColor} = useGetColors();
  return (
    <>
      <MaterialTextInput
        error={!!errorMessage}
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
      <Text style={{color: 'red'}}>{errorMessage}</Text>
    </>
  );
}
