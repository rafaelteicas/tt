import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';

type Props = {
  onPressLeftButton?: () => void;
  onPressRightButton?: () => void;
  leftButton?: boolean;
  titleRightButton: string;
};

export default function BottomButtons({
  onPressLeftButton,
  onPressRightButton,
  leftButton = false,
  titleRightButton,
}: Props) {
  const {separatorColor, color, backgroundColor} = useGetColors();

  return (
    <View
      style={[
        styles.container,
        {borderTopColor: separatorColor, marginLeft: -10},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: leftButton ? 'space-between' : 'flex-end',
          marginTop: 10,
        }}>
        {leftButton && (
          <Pressable
            onPress={onPressLeftButton}
            style={{
              borderWidth: 0.5,
              borderColor: color,
              padding: 10,
              maxWidth: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: color, fontWeight: 'bold'}}>
              Ignorar por enquanto
            </Text>
          </Pressable>
        )}
        <Pressable
          onPress={onPressRightButton}
          style={{
            backgroundColor: color,
            padding: 12,
            maxWidth: 100,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text style={{color: backgroundColor, fontWeight: 'bold'}}>
            {titleRightButton}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    borderTopWidth: 1,
    paddingHorizontal: 20,
    bottom: 0,
  },
});
