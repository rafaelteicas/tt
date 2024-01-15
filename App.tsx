import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Router';
import {FloatingButtonProvider} from './src/services/FloatingButton/FloatingButtonProvider';
import FloatingButton from './src/components/FloatingButton/FloatingButton';
import ModalProvider from './src/services/Modal/ModalProvider';
import Modal from './src/services/Modal/Modal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ModalProvider>
          <FloatingButtonProvider>
            <Router />
            <FloatingButton />
            <Modal />
          </FloatingButtonProvider>
        </ModalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
