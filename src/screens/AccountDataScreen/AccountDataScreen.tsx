import {Dimensions, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {Text} from '../../components/Text/Text';
import {TextInput} from 'react-native-paper';
import {AppStackNavType} from '../../routes/types';
import BottomButtons from '../../components/BottomButtons/BottomButtons';
import Screen from '../../components/Screen/Screen';

export function AccountDataScreen({
  navigation,
}: AppStackNavType<'AccountDataScreen'>) {
  const {backgroundColor, color} = useGetColors();
  const BLUE = '#1d9cef';

  function navigateToPasswordScreen() {
    navigation.navigate('PasswordScreen');
  }

  return (
    <Screen>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text bold fontSize={28} style={{color}}>
          Criar sua conta
        </Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <KeyboardAvoidingView>
            <TextInput
              selectionColor={BLUE}
              activeOutlineColor={BLUE}
              mode="outlined"
              style={{backgroundColor}}
              autoFocus
              label="Nome"
              textColor={color}
              outlineColor={color}
            />
            <TextInput
              selectionColor={BLUE}
              activeOutlineColor={BLUE}
              mode="outlined"
              style={{backgroundColor}}
              label="Celular ou e-mail"
              outlineColor={color}
              textColor={color}
            />
            <TextInput
              selectionColor={BLUE}
              activeOutlineColor={BLUE}
              mode="outlined"
              style={{backgroundColor}}
              label="Data de nascimento"
              outlineColor={color}
              textColor={color}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
      <BottomButtons
        titleRightButton="Próximo"
        onPressRightButton={navigateToPasswordScreen}
      />
    </Screen>
  );
}

export const styles = StyleSheet.create({
  bottomContainer: {
    width: Dimensions.get('window').width,
    borderTopWidth: 1,
    paddingHorizontal: 20,
    padding: 10,
    alignItems: 'flex-end',
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    maxWidth: 100,
    borderRadius: 20,
  },
});
