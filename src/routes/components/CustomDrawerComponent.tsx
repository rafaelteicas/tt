import React, {useState} from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useGetColors} from '../../hooks/useGetColors';
import Button from '../../components/Button/Button';
import Separator from '../../components/Separator/Separator';
import ButtonAndroid from '../../components/ButtonAndroid/ButtonAndroid';
import {useModal} from '../../services/Modal/useModal';
import ThemeSelector from '../../components/ThemeSelector/ThemeSelector';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useThemeProvider} from '../../services/ThemeProvider/useThemeProvider';
import {useSafeArea} from '../../hooks/useSafeArea';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {theme} from '../../theme/theme';
import Icon from '../../components/Icon/Icon';

const drawerIcons = [
  {
    name: 'person-outline',
    title: 'Perfil',
  },
  {
    name: 'list-outline',
    title: 'Lista',
  },
  {
    name: 'bookmark-outline',
    title: 'Itens salvos',
  },
];

export function CustomDrawerComponent({}: DrawerContentComponentProps) {
  const {color, searchBarPlaceholderColor} = useGetColors();
  const navigation = useNavigation();
  const {colorScheme} = useThemeProvider();
  const {backgroundColor} = useGetColors();
  const {top, bottom} = useSafeArea();
  const {setModal} = useModal();
  const animatedValue = useSharedValue(0);
  const animatedSettingsViewValue = useSharedValue(-100);
  const animatedColor = useSharedValue(color);
  const [settingsView, setSettingsView] = useState(false);

  const animation = useAnimatedStyle(() => ({
    transform: [{rotateZ: `${animatedValue.value}deg`}],
    color: animatedColor.value,
  }));

  const settingsViewAnimation = useAnimatedStyle(() => ({
    transform: [{translateY: animatedSettingsViewValue.value}],
    zIndex: -1,
  }));

  function handlePressAnimation() {
    if (animatedValue.value === -180) {
      animatedValue.value = withTiming(0);
      animatedColor.value = color;
      animatedSettingsViewValue.value = withTiming(-100);
      setTimeout(() => {
        setSettingsView(false);
      }, 200);
    } else {
      animatedValue.value = withTiming(-180);
      animatedColor.value = theme.colors.blue;
      setSettingsView(true);
      animatedSettingsViewValue.value = withTiming(10);
    }
  }

  return (
    <View
      style={{
        paddingTop: top,
        flex: 1,
        paddingBottom: bottom,
      }}>
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 20,
            zIndex: 1,
            backgroundColor: backgroundColor,
          }}>
          <Text
            style={{
              color: color,
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Inscreva-se no X hoje mesmo
          </Text>
          <Text style={{color: searchBarPlaceholderColor, paddingBottom: 20}}>
            Crie uma conta oficial no X para vivenciar a experiencia completa.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Criar conta"
              onPress={() =>
                navigation.navigate('CreateAccountScreen', {
                  text: 'Veja o que está \nacontecendo\nno mundo neste momento.',
                })
              }
            />
            <ButtonAndroid
              title="Entrar"
              outline={{color: theme.colors.darkGray, width: 1}}
              borderRadius={30}
              customStyle={{justifyContent: 'center'}}
              bold
              onPress={() =>
                navigation.navigate('CreateAccountScreen', {
                  text: 'Que bom ver você de novo! Entre na sua conta para ver o que há de mais recente.',
                  hide: true,
                })
              }
            />
          </View>
          <Separator marginTop={30} style={{paddingTop: 0.5}} />
          <View
            style={{
              paddingVertical: 20,
            }}>
            {drawerIcons.map(item => (
              <View key={item.name} style={styles.drawerIconsContainer}>
                <Icon name={item.name} size={22} color={color} />
                <Text style={[styles.textIcons, {color: color}]}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
          <Separator marginBottom={20} />
        </View>
        <View
          style={{
            position: 'relative',
            backgroundColor: backgroundColor,
            zIndex: 1,
          }}>
          <ButtonAndroid
            title="Configurações & suporte"
            onPress={handlePressAnimation}
            bold
            RightComponent={
              <Icon
                name="chevron-down-outline"
                size={20}
                color={color}
                style={[styles.iconStyle, animation]}
              />
            }
          />
        </View>
        {settingsView && (
          <Animated.View style={[settingsViewAnimation, {zIndex: -1}]}>
            <ButtonAndroid
              title="Configurações e privacidade"
              onPress={handlePressAnimation}
              LeftComponent={
                <Icon name="settings-outline" color={color} size={20} />
              }
            />
            <ButtonAndroid
              title="Central de Ajuda"
              onPress={handlePressAnimation}
              LeftComponent={
                <Icon name="help-circle-outline" color={color} size={20} />
              }
            />
          </Animated.View>
        )}
      </View>
      <Pressable
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer);
          setModal(<ThemeSelector />);
        }}>
        <Icon
          name={colorScheme === 'dark' ? 'moon-outline' : 'sunny-outline'}
          size={20}
          color={color}
          style={{
            marginLeft: 20,
          }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
  buttonContainer: {
    gap: 20,
    zIndex: 1,
  },
  textIcons: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerIconsContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 15,
  },
  iconStyle: {
    position: 'absolute',
    right: 20,
    top: '30%',
  },
});
