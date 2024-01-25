import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {ListRenderItemInfo, StatusBar, View} from 'react-native';
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
// const MIN_PROFILE_SIZE = 40;

export default function ProfileScreen() {
  const {backgroundColor, color} = useGetColors();
  const posts = useGetPosts();
  const user = useGetUser();
  const scrollY = useSharedValue(0);

  const animatedHeader = useAnimatedStyle(() => ({
    zIndex: 1,
    height: interpolate(
      scrollY.value,
      [0, MAX_HEADER_HEIGHT],
      [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
      {
        extrapolateLeft: Extrapolation.EXTEND,
      },
    ),
  }));

  const animatedBlurView = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [800, 1001], [0, 1]),
  }));

  const imageSize = useSharedValue(MAX_PROFILE_SIZE);
  const animatedImage = useAnimatedStyle(() => ({
    width: MAX_PROFILE_SIZE,
    height: MAX_PROFILE_SIZE,
    borderColor: backgroundColor,
    borderWidth: 5,
    left: 10,
    zIndex: interpolate(scrollY.value, [1, 200], [2, -1]),
    borderRadius: imageSize.value / 2,
    transform: [
      {
        scale: interpolate(scrollY.value, [0, MAX_HEADER_HEIGHT], [1, 0.6], {
          extrapolateLeft: Extrapolation.CLAMP,
          extrapolateRight: Extrapolation.CLAMP,
        }),
      },
      {
        translateY: interpolate(
          scrollY.value,
          [0, MAX_HEADER_HEIGHT],
          [1, 0.6],
          {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
          },
        ),
      },
    ],
    marginTop: interpolate(
      scrollY.value,
      [0, MIN_HEADER_HEIGHT],
      [80, MIN_HEADER_HEIGHT],
    ),
  }));

  const animatedName = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [800, 1010], [0, 1]),
    transform: [
      {
        translateY: interpolate(scrollY.value, [800, 1010], [30, 0], {
          extrapolateLeft: Extrapolation.CLAMP,
          extrapolateRight: Extrapolation.CLAMP,
        }),
      },
    ],
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
      <StatusBar backgroundColor={'black'} />
      <ProfileHeader
        animatedBlurView={animatedBlurView}
        animatedHeader={animatedHeader}
        animatedImage={animatedImage}
        user={user}
        animatedName={animatedName}
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
