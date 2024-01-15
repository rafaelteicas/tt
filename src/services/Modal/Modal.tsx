/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Pressable, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {useModal} from './useModal';
import Animated, {
  FadeInDown,
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useGetColors} from '../../hooks/useGetColors';

const {height, width} = Dimensions.get('window');

export default function Modal() {
  const {backgroundColor, searchBarPlaceholderColor} = useGetColors();
  const {modal, hideModal} = useModal();
  const [heightContent, setHeightContent] = useState<number>(1000);
  const yHeight = useSharedValue(0);
  const reset = useSharedValue(0);
  const pan = Gesture.Pan()
    .onStart(() => {
      reset.value = yHeight.value;
    })
    .onUpdate(e => {
      if (e.translationY < 0) {
        return null;
      }
      yHeight.value = e.translationY + reset.value;
    })
    .onEnd(() => {
      if (yHeight.value < -650 || yHeight.value > 30) {
        hideModal();
      }
      yHeight.value = 0;
    })
    .runOnJS(true);
  const animatedView = useAnimatedStyle(() => ({
    transform: [{translateY: yHeight.value}],
  }));
  if (!modal) {
    return null;
  }
  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeInUp}
      style={styles.container}>
      <Pressable onPress={hideModal}>
        <View style={styles.background} />
      </Pressable>
      <Animated.View
        style={[
          styles.modal,
          animatedView,
          {top: height - heightContent - 64, backgroundColor: backgroundColor},
        ]}>
        <GestureDetector gesture={pan}>
          <View
            style={{
              width,
              height: 30,
              position: 'absolute',
            }}>
            <View
              style={{
                backgroundColor: searchBarPlaceholderColor,
                width: 40,
                height: 6,
                borderRadius: 30,
                top: 20,
                alignSelf: 'center',
              }}
            />
          </View>
        </GestureDetector>
        <View
          onLayout={e => {
            setHeightContent(e.nativeEvent.layout.height);
          }}>
          {modal}
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
  },
  background: {
    height,
    width,
    backgroundColor: '#000',
    opacity: 0.3,
  },
  modal: {
    width,
    height,
    position: 'absolute',
    paddingVertical: 32,
    bottom: 0,
    borderRadius: 30,
  },
});
