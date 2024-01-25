import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme/theme';
import {useFloatingButton} from '../../services/FloatingButton/useFloatingButton';

export default function FloatingButton() {
  const {floatingButton} = useFloatingButton();

  if (!floatingButton) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Icon name={floatingButton.icon} color={'white'} size={30} />
    </View>
  );
}

const SIZE = 55;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: theme.colors.blue,
    bottom: 20,
    right: 20,
    elevation: 5,
  },
});
