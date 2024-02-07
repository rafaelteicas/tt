import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {Text} from '../../components/Text/Text';
import {TextInput} from 'react-native-paper';
import {AppStackNavType} from '../../routes/types';
import BottomButtons from '../../components/BottomButtons/BottomButtons';
import Screen from '../../components/Screen/Screen';
import DatePicker from 'react-native-date-picker';
import {format} from 'date-fns';

export function AccountDataScreen({
  navigation,
}: AppStackNavType<'AccountDataScreen'>) {
  const {backgroundColor, color} = useGetColors();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    if (datePicker) {
      Keyboard.dismiss();
    }
  }, [datePicker]);

  const BLUE = '#1d9cef';

  function navigateToPasswordScreen() {
    navigation.navigate('PasswordScreen');
  }

  function handleOpenDatePicker() {
    setDatePicker(true);
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
            <TextInput
              onPressIn={() => setDatePicker(false)}
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
              onPressIn={() => setDatePicker(false)}
              selectionColor={BLUE}
              activeOutlineColor={BLUE}
              mode="outlined"
              style={{backgroundColor}}
              label="Celular ou e-mail"
              outlineColor={color}
              textColor={color}
            />
            <TextInput
              value={format(date, 'dd/MM/yyyy')}
              selectionColor={BLUE}
              activeOutlineColor={BLUE}
              mode="outlined"
              style={{backgroundColor}}
              label="Data de nascimento"
              outlineColor={color}
              textColor={color}
              onPressIn={handleOpenDatePicker}
              showSoftInputOnFocus={false}
            />
          </KeyboardAvoidingView>
        </View>
      </Pressable>
      <BottomButtons
        titleRightButton="Próximo"
        onPressRightButton={navigateToPasswordScreen}
      />
      {datePicker && (
        <View style={{alignItems: 'center', marginTop: 20}}>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="date"
            textColor={color}
            fadeToColor={backgroundColor}
            locale="pt"
          />
        </View>
      )}
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
