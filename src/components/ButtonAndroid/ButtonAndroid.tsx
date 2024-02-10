import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {useGetColors} from '../../hooks/useGetColors';

type ButtonAndroidProps = {
  title: string;
  onPress?: () => void;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  bold?: boolean;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  outline?: {
    color: ColorValue;
    width: number;
  };
  borderRadius?: number;
  customStyle?: StyleProp<ViewStyle>;
  buttonHeight?: number;
  fontSize?: number;
};

export function ButtonAndroid({
  title,
  RightComponent,
  LeftComponent,
  bold,
  textColor,
  backgroundColor,
  outline,
  borderRadius,
  customStyle,
  buttonHeight,
  fontSize,
  onPress,
}: ButtonAndroidProps) {
  const {color, rippleColor} = useGetColors();
  return (
    <View
      style={{
        maxHeight: buttonHeight,
        justifyContent: 'center',
        backgroundColor,
        borderColor: outline?.color,
        borderWidth: outline?.width,
        borderRadius,
      }}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, true)}
        onPress={onPress}>
        <View style={[styles.button, customStyle]}>
          {LeftComponent}
          <Text
            style={[
              styles.text,
              {
                color: textColor || color,
                fontWeight: bold ? 'bold' : undefined,
                fontSize,
              },
            ]}>
            {title}
          </Text>
          {RightComponent}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    color: 'white',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    gap: 20,
  },
  text: {},
});
