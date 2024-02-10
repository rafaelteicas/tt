import {Keyboard, KeyboardAvoidingView, Pressable, View} from 'react-native';
import {TextInput, Screen, BottomButtons, Text} from '../../components';
import React, {useEffect, useState} from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {AppStackNavType} from '../../routes/types';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';
import {Controller, useForm} from 'react-hook-form';
import {AccountDataSchema, accountDataSchema} from './accountDataSchema';
import {zodResolver} from '@hookform/resolvers/zod';

export function AccountDataScreen({
  navigation,
}: AppStackNavType<'AccountDataScreen'>) {
  const {handleSubmit, control, getValues, formState} =
    useForm<AccountDataSchema>({
      resolver: zodResolver(accountDataSchema),
      mode: 'onChange',
    });
  const {backgroundColor, color} = useGetColors();
  const [datePicker, setDatePicker] = useState(false);
  const date = new Date();

  useEffect(() => {
    if (datePicker) {
      Keyboard.dismiss();
    }
  }, [datePicker]);

  function navigateToPasswordScreen(data: AccountDataSchema) {
    navigation.navigate('PasswordScreen', data);
  }

  function handleOpenDatePicker() {
    setDatePicker(true);
  }

  function handleCloseDatePicker() {
    setDatePicker(false);
  }

  return (
    <Screen>
      <Pressable
        onPress={() => setDatePicker(false)}
        style={{flex: 1, paddingHorizontal: 20}}>
        <Text bold fontSize={28} style={{color}}>
          Criar sua conta
        </Text>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <KeyboardAvoidingView>
            <Controller
              control={control}
              name="name"
              render={({field}) => (
                <TextInput
                  value={field.value}
                  onChangeText={field.onChange}
                  autoFocus
                  autoCapitalize="words"
                  label="Nome"
                  onPress={handleCloseDatePicker}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({field, fieldState}) => (
                <TextInput
                  errorMessage={fieldState.error?.message}
                  value={field.value}
                  onChangeText={field.onChange}
                  label="Celular ou e-mail"
                  onPress={handleCloseDatePicker}
                />
              )}
            />
            <TextInput
              value={getValues('birthday')}
              label="Data de nascimento"
              onPress={handleOpenDatePicker}
              showSoftInputOnFocus={false}
            />
          </KeyboardAvoidingView>
        </View>
      </Pressable>
      <BottomButtons
        titleRightButton="Próximo"
        onPressRightButton={handleSubmit(navigateToPasswordScreen)}
        disabledRight={!formState.isValid || formState.isSubmitting}
      />
      {datePicker && (
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Controller
            control={control}
            defaultValue={format(date, 'dd/MM/yyyy')}
            name="birthday"
            render={({field}) => (
              <DatePicker
                date={date}
                onDateChange={_date =>
                  field.onChange(format(_date, 'dd/MM/yyyy'))
                }
                mode="date"
                textColor={color}
                fadeToColor={backgroundColor}
                locale="pt"
              />
            )}
          />
        </View>
      )}
    </Screen>
  );
}
