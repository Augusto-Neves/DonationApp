import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './routes/mainNavigation';
import {Provider} from 'react-redux';
import {persister, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
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
