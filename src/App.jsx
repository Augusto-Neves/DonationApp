import React, {useRef, useEffect} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './routes/index';
import {Provider} from 'react-redux';
import {persister, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {checkToken} from './api/user';

function App() {
  const appState = useRef(AppState.currentState);

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
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
