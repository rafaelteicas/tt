import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import Separator from '../Separator/Separator';
import RadioButton from '../RadioButton/RadioButton';

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
    key: 'null',
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
  const [themeSelected, setThemeSelected] = useState<string>();
  const [themeDarkSelected, setDarkThemeSelected] = useState<string>();

  console.log(themeSelected);

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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{color: color, fontSize: 16, maxWidth: '70%'}}
              key={item.title}>
              {item.title}
            </Text>
            <RadioButton
              selected={themeSelected === item.key ? true : false}
              setSelected={() => setThemeSelected(item.key)}
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
