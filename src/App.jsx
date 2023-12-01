import React, {useRef, useEffect} from 'react';
import {AppState, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './routes/index';
import {Provider} from 'react-redux';
import {persister, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {checkToken} from './api/user';
import BootSplash from 'react-native-bootsplash';

function App() {
  const appState = useRef(AppState.currentState);

  function hideBootSplash() {
    BootSplash.hide();
  }

  useEffect(() => {
    AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        checkToken();
      }
    });
    checkToken();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persister} loading={null}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <NavigationContainer onReady={hideBootSplash}>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
