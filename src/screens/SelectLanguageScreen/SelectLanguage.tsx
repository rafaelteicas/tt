import {View} from 'react-native';
import React from 'react';
import {AppStackNavType} from '../../routes/types';
import {Text, BottomButtons, Screen, SearchInput} from '../../components';
import {useFloatingButton} from '../../services/FloatingButton/useFloatingButton';

export function SelectLanguageScreen({
  navigation,
}: AppStackNavType<'SelectLanguageScreen'>) {
  const {hideFloatingButton} = useFloatingButton();
  hideFloatingButton();

  function navigateToAccountDataScreen() {
    navigation.navigate('AccountDataScreen');
  }

  return (
    <Screen>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Text bold fontSize={24} style={{marginBottom: 10}}>
          {'Selecione seus(s) \nidioma(s)'}
        </Text>
        <Text paragraph style={{marginBottom: 10}}>
          Selecione os idiomas para personalizar sua experiência no X.
        </Text>
        <SearchInput />
      </View>
      <BottomButtons
        leftButton
        onPressRightButton={navigateToAccountDataScreen}
        titleRightButton="Avançar"
      />
    </Screen>
  );
}
