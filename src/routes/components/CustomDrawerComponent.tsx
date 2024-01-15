import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {useGetColors} from '../../hooks/useGetColors';
import Button from '../../components/Button/Button';
import Separator from '../../components/Separator/Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonAndroid from '../../components/ButtonAndroid/ButtonAndroid';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useModal} from '../../services/Modal/useModal';
import ThemeSelector from '../../components/ThemeSelector/ThemeSelector';
import {DrawerActions, useNavigation} from '@react-navigation/native';

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
  const {color, searchBarPlaceholderColor} = useGetColors();
  const {height} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();
  const {setModal} = useModal();
  return (
    <DrawerContentScrollView scrollEnabled={false}>
      <View style={styles.container}>
        <Text
          style={{
            color: color,
            fontSize: 25,
            fontWeight: 'bold',
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
        <Separator />
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
        <Separator />
        <ButtonAndroid />
      </View>
      <View
        style={{
          position: 'absolute',
          top: height - bottom - 20,
          left: 20,
        }}>
        <Pressable
          onPress={() => {
            navigation.dispatch(DrawerActions.closeDrawer);
            setModal(<ThemeSelector />);
          }}>
          <Icon name="sunny-outline" size={20} color={color} />
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
  },
  buttonContainer: {
    gap: 20,
    marginBottom: 20,
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
});
