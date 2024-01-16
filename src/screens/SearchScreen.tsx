import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useGetColors} from '../hooks/useGetColors';
import {Header} from '../components/Header/Header';
import {useSafeArea} from '../hooks/useSafeArea';

export default function SearchScreen() {
  const [text, setText] = useState('');
  const {backgroundColor, searchBarPlaceholderColor} = useGetColors();
  const {top} = useSafeArea();
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
