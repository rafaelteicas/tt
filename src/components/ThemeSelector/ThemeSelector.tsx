import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import Separator from '../Separator/Separator';
import RadioButton from '../RadioButton/RadioButton';
import {useThemeProvider} from '../../services/ThemeProvider/useThemeProvider';

const mapThemeSelector = [
  {
    title: 'Desativado',
    key: 'light',
  },
  {
    title: 'Ativado',
    key: 'dark',
  },
  {
    title: 'Usar as configurações do dispositivo',
    key: 'system',
  },
];

const mapDarkThemeSelector = [
  {
    title: 'Um pouco escuro',
    key: 'darker1',
  },
  {
    title: 'Totalmente escuro',
    key: 'darker2',
  },
];

export default function ThemeSelector() {
  const {theme, changeColorScheme} = useThemeProvider();

  const [themeSelected, setThemeSelected] = useState<string>(theme);
  const [themeDarkSelected, setDarkThemeSelected] = useState<string>();

  function handleThemeSelector(item: string) {
    setThemeSelected(item);
    changeColorScheme(item as any);
  }

  const {color} = useGetColors();
  return (
    <View style={{marginBottom: 20}}>
      <Text
        style={{
          color: color,
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        Modo escuro
      </Text>
      <Separator />
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        {mapThemeSelector.map(item => (
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            key={item.title}>
            <Text
              style={{color: color, fontSize: 16, maxWidth: '70%'}}
              key={item.title}>
              {item.title}
            </Text>
            <RadioButton
              selected={themeSelected === item.key ? true : false}
              setSelected={() => handleThemeSelector(item.key)}
            />
          </View>
        ))}
      </View>
      <Separator />
      <Text
        style={{
          color: color,
          fontSize: 20,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        Tema escuro
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}>
        {mapDarkThemeSelector.map(item => (
          <View
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            key={item.title}>
            <Text style={{color: color, fontSize: 16}} key={item.title}>
              {item.title}
            </Text>
            <RadioButton
              selected={themeDarkSelected === item.key ? true : false}
              setSelected={() => setDarkThemeSelected(item.key)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
