import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import {useGetColors} from '../../hooks/useGetColors';

type ButtonAndroidProps = {
  title: string;
};

export default function ButtonAndroid({title}: ButtonAndroidProps) {
  const {color, rippleColor} = useGetColors();
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(rippleColor, false)}
        onPress={() => {}}>
        <View style={styles.button}>
          <Text style={[styles.text, {color: color}]}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white',
    width: '100%',
    height: 52,
    justifyContent: 'center',
  },
  text: {
    paddingHorizontal: 25,
  },
});
