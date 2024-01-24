import React from 'react';

import {Text, TouchableNativeFeedback, View} from 'react-native';

import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {useGetColors} from '../../../hooks/useGetColors';
import {theme} from '../../../theme/theme';

export function CustomProfileNavigator({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  const {color, separatorColor, rippleColor, backgroundColor} = useGetColors();
  return (
    <View style={{backgroundColor}}>
      <Text>OLA</Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          function onPress() {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          }

          return (
            <TouchableNativeFeedback
              onPress={onPress}
              key={index}
              background={TouchableNativeFeedback.Ripple(rippleColor, false)}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{padding: 15}}>
                  <Text
                    style={{
                      fontWeight: isFocused ? 'bold' : undefined,
                      color: color,
                    }}>
                    {label.toString()}
                  </Text>
                </View>
                {isFocused && (
                  <View
                    style={{
                      width: 50,
                      height: 3,
                      backgroundColor: theme.colors.blue,
                      borderRadius: 10,
                    }}
                  />
                )}
              </View>
            </TouchableNativeFeedback>
          );
        })}
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: 1,
            backgroundColor: separatorColor,
            bottom: 0,
            zIndex: -1,
          }}
        />
      </View>
    </View>
  );
}
