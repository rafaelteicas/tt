import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon, Screen, Text} from '../../components';
import {useGetColors} from '../../hooks/useGetColors';
import {TextInput} from 'react-native-paper';

export default function PasswordScreen() {
  const {color, backgroundColor} = useGetColors();
  const BLUE = '#1d9cef';

  return (
    <Screen>
      <View>
        <Text style={[styles.title, {color, marginBottom: 10}]}>
          {'Você precisará de uma\nsenha'}
        </Text>
        <Text paragraph>É preciso ter 8 caracteres ou mais.</Text>
        <View style={{position: 'relative', maxHeight: 42, marginTop: 10}}>
          <TextInput
            selectionColor={BLUE}
            activeOutlineColor={BLUE}
            mode="outlined"
            style={{backgroundColor}}
            autoFocus
            label="Senha"
            textColor={color}
            outlineColor={color}
          />
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
            }}>
            <Icon name="eye-outline" />
          </View>
        </View>
        <View style={{marginTop: 50, paddingHorizontal: 20}}>
          <Text>Ao se inscrever, bla bla bla</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
