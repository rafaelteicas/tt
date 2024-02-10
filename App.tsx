import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Router';
import {FloatingButtonProvider} from './src/services/FloatingButton/FloatingButtonProvider';
import FloatingButton from './src/components/FloatingButton/FloatingButton';
import ModalProvider from './src/services/Modal/ModalProvider';
import Modal from './src/services/Modal/Modal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ThemeProvider from './src/services/ThemeProvider/ThemeProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PaperProvider} from 'react-native-paper';

const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
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
        </PaperProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
