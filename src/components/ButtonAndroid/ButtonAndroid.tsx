import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableNativeFeedback} from 'react-native';

export default function ButtonAndroid() {
  return (
    <TouchableNativeFeedback
      style={{width: 1000, height: 1000, backgroundColor: 'red'}}>
      <Text style={styles.buttonText}>Ola</Text>
    </TouchableNativeFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
});
