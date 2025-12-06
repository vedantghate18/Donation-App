import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/Store';
import { firebase } from '@react-native-firebase/app';
import { checkToken } from './api/user';

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        checkToken();
      }
      appState.current = nextAppState;
    });
  }, []);
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
console.log('Firebase initialized:', firebase.app().name);

export default App;
