import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';

const BUTTON_SIZE = 20;

type Props = {
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function RadioButton({selected, setSelected}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.radioCircle}
        onPress={() => setSelected(true)}>
        {selected ? <View style={styles.selectedRb} /> : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 35,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 35,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: 2,
    borderColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: BUTTON_SIZE / 2,
    height: BUTTON_SIZE / 2,
    borderRadius: 50,
    backgroundColor: theme.colors.blue,
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});
