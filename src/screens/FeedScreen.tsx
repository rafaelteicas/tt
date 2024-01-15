import React, {useEffect} from 'react';
import {useGetColors} from '../hooks/useGetColors';
import {StyleSheet, Text, View} from 'react-native';
import {useFloatingButton} from '../services/FloatingButton/useFloatingButton';

export function FeedScreen() {
  const theme = useGetColors();
  const {showFloatingButton} = useFloatingButton();

  useEffect(() => {
    showFloatingButton({
      icon: 'add-outline',
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[{backgroundColor: theme.backgroundColor}, styles.container]}>
      <Text style={{color: theme.color}}>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
