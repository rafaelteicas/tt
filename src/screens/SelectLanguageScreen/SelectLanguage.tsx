import {View, StyleSheet, Dimensions, Pressable} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {AppStackNavType} from '../../routes/types';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import {useSafeArea} from '../../hooks/useSafeArea';
import Text from '../../components/Text/Text';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {useFloatingButton} from '../../services/FloatingButton/useFloatingButton';

export function SelectLanguageScreen({
  navigation,
}: AppStackNavType<'SelectLanguageScreen'>) {
  const {backgroundColor, separatorColor, color} = useGetColors();
  const {top, bottom} = useSafeArea();
  const {hideFloatingButton} = useFloatingButton();
  hideFloatingButton();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor, paddingTop: top, paddingBottom: bottom},
      ]}>
      <AuthHeader />
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={{marginBottom: 5}}>
          <Text bold fontSize={24} style={{marginBottom: 10}}>
            {'Selecione seus(s) \nidioma(s)'}
          </Text>
          <Text paragraph>
            Selecione os idiomas para personalizar sua experiência no X.
          </Text>
        </View>
        <SearchInput />
      </View>
      <View
        style={[
          styles.bottomButtonsContainer,
          {borderTopColor: separatorColor},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: color,
              padding: 10,
              maxWidth: 200,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: color, fontWeight: 'bold'}}>
              Ignorar por enquanto
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('AccountDataScreen')}
            style={{
              backgroundColor: color,
              padding: 12,
              maxWidth: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{color: backgroundColor, fontWeight: 'bold'}}>
              Avançar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomButtonsContainer: {
    width: Dimensions.get('window').width,
    borderTopWidth: 1,
    paddingHorizontal: 20,
    bottom: 0,
  },
});
