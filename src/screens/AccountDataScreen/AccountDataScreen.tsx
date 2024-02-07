import {
  Dimensions,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import {useSafeArea} from '../../hooks/useSafeArea';
import Text from '../../components/Text/Text';
import {TextInput} from 'react-native-paper';

export function AccountDataScreen() {
  const {backgroundColor, color, separatorColor} = useGetColors();
  const {top, bottom} = useSafeArea();
  const BLUE = '#1d9cef';
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        paddingTop: top,
      }}>
      <AuthHeader />
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <Text bold fontSize={24} style={{color}}>
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
            />
            <TextInput
              selectionColor={BLUE}
              activeOutlineColor={BLUE}
              mode="outlined"
              style={{backgroundColor}}
              label="Celular ou e-mail"
              textColor={color}
            />
            <TextInput
              selectionColor={BLUE}
              activeOutlineColor={BLUE}
              mode="outlined"
              style={{backgroundColor}}
              label="Data de nascimento"
              textColor={color}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
      <View
        style={[
          styles.bottomContainer,
          {borderTopColor: separatorColor, paddingBottom: bottom},
        ]}>
        <Pressable
          style={[
            styles.btn,
            {
              backgroundColor: color,
            },
          ]}>
          <Text style={{color: backgroundColor, fontWeight: 'bold'}}>
            Próximo
          </Text>
        </Pressable>
      </View>
    </View>
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
