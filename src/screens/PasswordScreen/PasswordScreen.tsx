import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BottomButtons, Icon, Screen, Text, TextInput} from '../../components';
import {useGetColors} from '../../hooks/useGetColors';
import {Controller, useForm} from 'react-hook-form';
import {
  PasswordScreenSchema,
  passwordScreenSchema,
} from './passwordScreenSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {AppStackNavType} from '../../routes/types';
import {useAuthSignUp} from '../../domain/Auth/useCases/useAuthSignUp';

export default function PasswordScreen({
  route,
}: AppStackNavType<'PasswordScreen'>) {
  const {color, backgroundColor} = useGetColors();
  const {signUp} = useAuthSignUp();
  const BLUE = '#1d9cef';

  const {control, handleSubmit} = useForm<PasswordScreenSchema>({
    resolver: zodResolver(passwordScreenSchema),
    mode: 'onChange',
  });

  const {email, birthday, name} = route.params;

  async function handleSignUpPress({password}: PasswordScreenSchema) {
    signUp({
      email,
      birthday,
      name,
      password,
    });
  }

  return (
    <Screen>
      <View style={{flex: 1}}>
        <Text style={[styles.title, {color, marginBottom: 10}]}>
          {'Você precisará de uma\nsenha'}
        </Text>
        <Text paragraph>É preciso ter 8 caracteres ou mais.</Text>
        <View style={{position: 'relative', maxHeight: 42, marginTop: 10}}>
          <Controller
            control={control}
            name="password"
            render={({field, fieldState}) => (
              <TextInput
                errorMessage={fieldState.error?.message}
                value={field.value}
                onChangeText={field.onChange}
                selectionColor={BLUE}
                activeOutlineColor={BLUE}
                mode="outlined"
                style={{backgroundColor}}
                autoFocus
                label="Senha"
                textColor={color}
                outlineColor={color}
              />
            )}
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
      <BottomButtons
        titleRightButton="Enviar"
        onPressRightButton={handleSubmit(handleSignUpPress)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
