import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {ListRenderItemInfo, View} from 'react-native';
import {useGetColors} from '../../hooks/useGetColors';
import {useGetUser} from '../../domain/User/useCases/useGetUser';
import {useGetPosts} from '../../domain/Post/useCases/useGetPosts';
import {PostComponent} from '../../components/PostComponent/PostComponent';
import {PostType} from '../../domain/Post/postTypes';
import {ProfileHeader} from './components/ProfileHeader';
import Text from '../../components/Text/Text';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const TopNavigator = createMaterialTopTabNavigator();

const MAX_HEADER_HEIGHT = 120;
const MIN_HEADER_HEIGHT = 70;

const MAX_PROFILE_SIZE = 80;
const MIN_PROFILE_SIZE = 40;

export default function ProfileScreen() {
  const {backgroundColor, color} = useGetColors();
  const posts = useGetPosts();
  const user = useGetUser();
  const scrollY = useSharedValue(0);
  const animatedHeader = useAnimatedStyle(() => ({
    height: interpolate(
      scrollY.value,
      [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT],
      [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    ),
    zIndex: 1,
    blurRadius: interpolate(scrollY.value, [0, 1], [0, 0.01]),
  }));

  const imageSize = useSharedValue(MAX_PROFILE_SIZE);
  const animatedImage = useAnimatedStyle(() => ({
    zIndex: interpolate(scrollY.value, [1, 200], [2, -1]),
    width: interpolate(
      scrollY.value,
      [0, MIN_PROFILE_SIZE],
      [MAX_PROFILE_SIZE, MIN_PROFILE_SIZE],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
    height: interpolate(
      scrollY.value,
      [0, MIN_PROFILE_SIZE],
      [MAX_PROFILE_SIZE, MIN_PROFILE_SIZE],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    ),
    borderRadius: imageSize.value / 2,
    marginLeft: 10,
    marginTop: interpolate(
      scrollY.value,
      [0, MAX_HEADER_HEIGHT + MIN_PROFILE_SIZE + 500],
      [80, 0],
    ),
  }));

  function renderItem({item}: ListRenderItemInfo<PostType>) {
    return <PostComponent {...item} />;
  }

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      const contentScrollY = e.contentOffset.y;
      scrollY.value = contentScrollY;
    },
  });

  function renderFlatList() {
    return (
      <Animated.FlatList
        style={{flex: 1, backgroundColor}}
        keyExtractor={item => item.id.toString()}
        data={posts}
        renderItem={renderItem}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        initialNumToRender={2}
      />
    );
  }

  return (
    <View style={{flex: 1}}>
      <ProfileHeader
        animatedHeader={animatedHeader}
        animatedImage={animatedImage}
        user={user}
      />
      <TopNavigator.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor},
          tabBarPressColor: color,
          tabBarActiveTintColor: color,
          tabBarLabel: ({children, color}) => (
            <Text style={{color, fontWeight: 'bold', fontSize: 12}}>
              {children}
            </Text>
          ),
        }}>
        <TopNavigator.Screen name="Publicações" component={renderFlatList} />
        <TopNavigator.Screen name="Respostas" component={renderFlatList} />
        <TopNavigator.Screen name="Destaques" component={renderFlatList} />
        <TopNavigator.Screen name="Mídia" component={renderFlatList} />
      </TopNavigator.Navigator>
    </View>
  );
}
