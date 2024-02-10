import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useGetColors} from '../../hooks/useGetColors';
import {AuthHeader} from '../AuthHeader/AuthHeader';
import {useSafeArea} from '../../hooks/useSafeArea';

export function Screen({children}: {children: React.ReactNode}) {
  const {backgroundColor} = useGetColors();
  const {bottom, top} = useSafeArea();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor, paddingBottom: bottom, paddingTop: top},
      ]}>
      <AuthHeader />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
