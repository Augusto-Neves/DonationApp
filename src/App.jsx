import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainNavigation} from './routes/mainNavigation';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
