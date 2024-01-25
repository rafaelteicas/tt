import {View, Image, Pressable} from 'react-native';
import React from 'react';
import {PostType} from '../../domain/Post/postTypes';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';
import {useNavigation} from '@react-navigation/native';

const PROFILE_IMAGE = 40;

export function PostComponent({text, media, author, metadata}: PostType) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
      }}>
      <Pressable
        onPress={() => navigation.navigate('ProfileScreen', {id: author.id})}>
        <Image
          source={{uri: author.profileImage}}
          width={PROFILE_IMAGE}
          height={PROFILE_IMAGE}
          style={{borderRadius: PROFILE_IMAGE / 2, marginRight: 10}}
        />
      </Pressable>
      <View
        style={{
          gap: 5,
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text bold>{author.profileName}</Text>
          <Text paragraph>{author.username}</Text>
        </View>
        <Text paragraph style={{flex: 1}}>
          {text}
        </Text>
        {media &&
          (typeof media.uri === 'string' ? (
            <Image
              source={{uri: media.uri}}
              style={{width: '100%', borderRadius: 16, aspectRatio: 16 / 9}}
            />
          ) : null)}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <PostBottomComponentIcons
            icon="chatbox-outline"
            data={metadata.comments}
          />
          <PostBottomComponentIcons
            icon="sync-outline"
            data={metadata.shared}
          />
          <PostBottomComponentIcons
            icon="heart-outline"
            data={metadata.likes}
          />
          <PostBottomComponentIcons
            icon="stats-chart-outline"
            data={metadata.views}
          />
          <Icon name="share-social-outline" size={16} />
        </View>
      </View>
    </View>
  );
}

function PostBottomComponentIcons({data, icon}: {data: string; icon: string}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Icon name={icon} size={16} />
      <Text paragraph>{data}</Text>
    </View>
  );
}
