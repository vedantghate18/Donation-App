import React from 'react';
import { View, Text } from 'react-native';
import { getFontFamily } from './Helper/helper';
import MainNavigation from './navigation/mainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/Store';
import { firebase } from '@react-native-firebase/app';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNavigation></MainNavigation>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
console.log('Firebase initialized:', firebase.app().name);

export default App;
