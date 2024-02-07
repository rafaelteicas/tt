import {ColorValue, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {AuthHeader} from '../../components/AuthHeader/AuthHeader';
import {useGetColors} from '../../hooks/useGetColors';
import {useSafeArea} from '../../hooks/useSafeArea';
import {Text} from '../../components/Text/Text';
import ButtonAndroid from '../../components/ButtonAndroid/ButtonAndroid';
import {AppStackNavType} from '../../routes/types';
import {useFloatingButton} from '../../services/FloatingButton/useFloatingButton';

const BUTTON_HEIGHT = 44;
const FONTSIZE = 16;
const DEFAULT_PADDING_HORIZONTAL = 30;

export function CreateAccountScreen({
  navigation,
  route,
}: AppStackNavType<'CreateAccountScreen'>) {
  const {top} = useSafeArea();
  const {backgroundColor, separatorColor, color} = useGetColors();
  const {hideFloatingButton} = useFloatingButton();
  hideFloatingButton();

  function navigateToSelectLanguage() {
    navigation.navigate('SelectLanguageScreen');
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor, paddingTop: top},
      ]}>
      <AuthHeader onPressIcon={navigation.goBack} />
      <View
        style={
          (styles.textContainer,
          {paddingHorizontal: DEFAULT_PADDING_HORIZONTAL})
        }>
        <Text bold fontSize={30}>
          {route.params.text}
        </Text>
      </View>
      <View style={styles.buttonsView}>
        <ButtonAndroid
          title="Continuar com Google"
          bold
          textColor={backgroundColor}
          backgroundColor={color}
          borderRadius={30}
          LeftComponent={
            <Image
              source={require('../../assets/icons/Google.png')}
              style={{width: 20, height: 20}}
            />
          }
          customStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          }}
          buttonHeight={BUTTON_HEIGHT}
          fontSize={FONTSIZE}
        />
        <Separator separatorColor={separatorColor} />
        <ButtonAndroid
          title="Criar conta"
          textColor={backgroundColor}
          backgroundColor={color}
          bold
          borderRadius={30}
          customStyle={{justifyContent: 'center', alignItems: 'center'}}
          buttonHeight={BUTTON_HEIGHT}
          fontSize={FONTSIZE}
          onPress={navigateToSelectLanguage}
        />
        {!route.params.hide && (
          <View style={styles.textContainer}>
            <Text style={{marginBottom: 50, fontSize: 12}}>
              Ao se inscrever você concorda com nossos Termos, a Política de
              Privacidade e o Uso de Cookies.
            </Text>
            <Text paragraph>Jã tem uma conta? Entrar</Text>
          </View>
        )}
      </View>
      {route.params.hide && (
        <View style={{paddingHorizontal: DEFAULT_PADDING_HORIZONTAL}}>
          <Text paragraph>Não tem uma conta? Inscreva-se</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  textContainer: {
    paddingTop: 30,
  },
  buttonsView: {
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    gap: 10,
  },
});

function Separator({separatorColor}: {separatorColor: ColorValue}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: 1,
          backgroundColor: separatorColor,
          flex: 1,
        }}
      />
      <Text paragraph fontSize={12}>
        ou
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: separatorColor,
          flex: 1,
        }}
      />
    </View>
  );
}
