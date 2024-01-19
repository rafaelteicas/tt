import {View, Image} from 'react-native';
import React from 'react';
import {PostType} from '../../domain/Post/postTypes';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

const PROFILE_IMAGE = 40;

export function PostComponent({text, author, metadata}: PostType) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
      }}>
      <Image
        source={{uri: author.profileImage}}
        width={PROFILE_IMAGE}
        height={PROFILE_IMAGE}
        style={{borderRadius: PROFILE_IMAGE / 2, marginRight: 10}}
      />
      <View
        style={{
          gap: 5,
        }}>
        <View style={{flexDirection: 'row', gap: 5}}>
          <Text bold>{author.profileName}</Text>
          <Text paragraph>{author.username}</Text>
        </View>
        <Text paragraph>{text}</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
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
