import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, TextInput, TextInputProps} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useGetColors} from '../../hooks/useGetColors';

type Props = {
  value?: string;
  onChangeText?: TextInputProps['onChangeText'];
};

export function Header({value, onChangeText}: Props) {
  const {color, searchBarPlaceholderColor} = useGetColors();
  const navigation = useNavigation();
  return (
    <View
      style={{
        gap: 15,
      }}>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon
          name="arrow-back"
          size={20}
          onPress={navigation.goBack}
          color={color}
          style={{
            paddingRight: 40,
            marginBottom: 5,
          }}
        />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          autoFocus
          placeholder="Buscar X"
          placeholderTextColor={searchBarPlaceholderColor}
          style={{
            color: '#32b6ff',
            flexGrow: 1,
            flexShrink: 1,
            fontWeight: '600',
          }}
        />
        {value && (
          <Icon
            name="close-outline"
            size={25}
            onPress={() => (onChangeText ? onChangeText('') : null)}
            color={color}
            style={{
              paddingLeft: 20,
            }}
          />
        )}
      </View>
      <View
        style={{
          width: '100%',
          height: 0.2,
          backgroundColor: searchBarPlaceholderColor,
        }}
      />
    </View>
  );
}
