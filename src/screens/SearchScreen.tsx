import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useGetColors} from '../hooks/useGetColors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Header} from '../components/Header/Header';

export default function SearchScreen() {
  const [text, setText] = useState('');
  const {backgroundColor, searchBarPlaceholderColor} = useGetColors();
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          paddingTop: top,
        },
        styles.container,
      ]}>
      <Header value={text} onChangeText={setText} />
      <Text style={[styles.text, {color: searchBarPlaceholderColor}]}>
        Tente buscar por pessoas tópicos ou palavras-chave
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: '80%',
    marginTop: 20,
  },
});
