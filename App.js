import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStateProvider} from './src/Context';
import AppSource from './src/Routing';

const App = () => {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <AppSource />
      </NavigationContainer>
    </AppStateProvider>
  );
};

export default App;
