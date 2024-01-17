import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {useGetColors} from '../../hooks/useGetColors';

type ButtonAndroidProps = {
  title: string;
  onPress?: () => void;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
};

export default function ButtonAndroid({
  title,
  RightComponent,
  LeftComponent,
  onPress,
}: ButtonAndroidProps) {
  const {color, rippleColor} = useGetColors();
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(rippleColor, false)}
      onPress={onPress}
      style={[
        styles.container,
        {
          flexDirection: RightComponent ? 'row' : 'row-reverse',
          justifyContent: RightComponent ? 'space-between' : undefined,
        },
      ]}>
      <View style={styles.button}>
        {LeftComponent}
        <Text style={[styles.text, {color: color}]}>{title}</Text>
        {RightComponent}
      </View>
    </TouchableNativeFeedback>
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
  },
  text: {
    paddingHorizontal: 25,
  },
});
