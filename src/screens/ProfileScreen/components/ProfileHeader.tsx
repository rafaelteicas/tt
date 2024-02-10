import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {Text} from '../../../components';
import {UserType} from '../../../domain/User/userType';
import {useGetColors} from '../../../hooks/useGetColors';
import {BlurView} from '@react-native-community/blur';

// const PROFILE_SCREEN_IMAGE_SIZE = 80;

type Props = {
  animatedHeader: any;
  animatedImage: any;
  animatedName: any;
  animatedBlurView: any;
  user: UserType;
};

export function ProfileHeader({
  animatedHeader,
  animatedImage,
  animatedName,
  animatedBlurView,
  user,
}: Props) {
  const {backgroundColor, color} = useGetColors();
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  return (
    <Animated.View style={[{backgroundColor, minHeight: MIN_HEADER_HEIGHT}]}>
      <AnimatedBlurView
        blurAmount={1}
        blurType={'dark'}
        style={[
          animatedBlurView,
          {
            position: 'absolute',
            width: Dimensions.get('window').width,
            zIndex: 2,
            height: MIN_HEADER_HEIGHT,
            maxHeight: MIN_HEADER_HEIGHT,
            minHeight: MIN_HEADER_HEIGHT,
          },
        ]}
      />
      <Animated.Image
        style={[styles.header, animatedHeader]}
        source={{uri: user.profileHeader}}
      />
      <Animated.Image
        source={{uri: user.profileImage}}
        style={[animatedImage, styles.image]}
      />
      <Animated.View style={[styles.name, {top: 10}, animatedName]}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white',
          }}>
          {user.profileName}
        </Text>
        <Text
          style={{
            color: 'white',
          }}>
          211 tweets
        </Text>
      </Animated.View>
      <Text
        style={{
          fontSize: 18,
          paddingLeft: 10,
          fontWeight: 'bold',
          color,
        }}>
        {user.profileName}
      </Text>
      <Text style={{paddingLeft: 10}}>{user.username}</Text>
    </Animated.View>
  );
}

const MAX_HEADER_HEIGHT = 120;
const MAX_PROFILE_SIZE = 80;
const MIN_HEADER_HEIGHT = 70;
const MIN_PROFILE_SIZE = 40;

const styles = StyleSheet.create({
  image: {
    maxWidth: MAX_PROFILE_SIZE,
    maxHeight: MAX_PROFILE_SIZE,
    minHeight: MIN_PROFILE_SIZE,
    minWidth: MIN_PROFILE_SIZE,
  },
  header: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: MAX_HEADER_HEIGHT,
    minHeight: MIN_HEADER_HEIGHT,
  },
  iconsContainer: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 50 / 2,
  },
  name: {
    position: 'absolute',
    zIndex: 2,
    left: 20,
  },
});
