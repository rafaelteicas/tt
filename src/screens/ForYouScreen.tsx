import React, {useEffect} from 'react';
import {useGetColors} from '../hooks/useGetColors';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {useFloatingButton} from '../services/FloatingButton/useFloatingButton';
import {useGetPosts} from '../domain/Post/useCases/useGetPosts';
import {PostType} from '../domain/Post/postTypes';
import {PostComponent} from '../components/PostComponent/PostComponent';

export function ForYouScreen() {
  const theme = useGetColors();
  const {showFloatingButton} = useFloatingButton();
  const posts = useGetPosts();

  useEffect(() => {
    showFloatingButton({
      icon: 'add-outline',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderItem({item}: ListRenderItemInfo<PostType>) {
    return <PostComponent {...item} key={item.text} />;
  }

  return (
    <View style={{backgroundColor: theme.backgroundColor, flex: 1}}>
      <FlatList
        keyExtractor={item => item.text}
        data={posts}
        renderItem={renderItem}
      />
    </View>
  );
}
