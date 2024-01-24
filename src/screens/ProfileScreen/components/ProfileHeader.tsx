import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Text from '../../../components/Text/Text';
import {UserType} from '../../../domain/User/userType';
import {useGetColors} from '../../../hooks/useGetColors';

// const PROFILE_SCREEN_IMAGE_SIZE = 80;

type Props = {
  animatedHeader: any;
  animatedImage: any;
  user: UserType;
};

export function ProfileHeader({animatedHeader, animatedImage, user}: Props) {
  const {backgroundColor} = useGetColors();

  return (
    <Animated.View style={{backgroundColor, minHeight: MIN_HEADER_HEIGHT}}>
      <Animated.Image
        style={[styles.header, animatedHeader]}
        source={{uri: user.profileHeader}}
      />
      <Animated.Image
        source={{uri: user.profileImage}}
        style={[animatedImage, styles.image]}
      />
      <Text
        style={{
          marginTop: 10,
          fontSize: 18,
          paddingLeft: 10,
          fontWeight: 'bold',
        }}>
        {user.profileName}
      </Text>
      <Text style={{paddingLeft: 10}}>{user.username}</Text>
    </Animated.View>
  );
}

const MAX_HEADER_HEIGHT = 120;
const MIN_HEADER_HEIGHT = 70;
const MAX_PROFILE_SIZE = 80;
const MIN_PROFILE_SIZE = 40;

const styles = StyleSheet.create({
  image: {
    maxWidth: MAX_PROFILE_SIZE,
    maxHeight: MAX_PROFILE_SIZE,
    minHeight: MIN_PROFILE_SIZE,
    minWidth: MIN_PROFILE_SIZE,
    borderWidth: 5,
  },
  header: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: MAX_HEADER_HEIGHT,
    minHeight: MIN_HEADER_HEIGHT,
  },
});
