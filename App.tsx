import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Router';
import {FloatingButtonProvider} from './src/services/FloatingButton/FloatingButtonProvider';
import FloatingButton from './src/components/FloatingButton/FloatingButton';
import ModalProvider from './src/services/Modal/ModalProvider';
import Modal from './src/services/Modal/Modal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ThemeProvider from './src/services/ThemeProvider/ThemeProvider';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ThemeProvider>
          <FloatingButtonProvider>
            <ModalProvider>
              <Router />
              <Modal />
            </ModalProvider>
            <FloatingButton />
          </FloatingButtonProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
