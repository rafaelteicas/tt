import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useGetColors} from '../../hooks/useGetColors';
import Button from '../../components/Button/Button';
import Separator from '../../components/Separator/Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonAndroid from '../../components/ButtonAndroid/ButtonAndroid';
import {useModal} from '../../services/Modal/useModal';
import ThemeSelector from '../../components/ThemeSelector/ThemeSelector';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useThemeProvider} from '../../services/ThemeProvider/useThemeProvider';
import {useSafeArea} from '../../hooks/useSafeArea';

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
  const navigation = useNavigation();
  const {colorScheme} = useThemeProvider();
  const {top, bottom} = useSafeArea();
  const {color, searchBarPlaceholderColor} = useGetColors();
  const {setModal} = useModal();
  return (
    <View style={{paddingTop: top, flex: 1, paddingBottom: bottom}}>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20}}>
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
            <Button title="Criar conta" />
            <Button title="Entrar" outline />
          </View>
          <Separator marginTop={30} />
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
        <View style={{position: 'relative'}}>
          <ButtonAndroid title="Configurações & Suporte" />
          <Icon
            name="chevron-down-outline"
            size={20}
            color={color}
            style={styles.iconStyle}
          />
        </View>
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
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    gap: 20,
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
