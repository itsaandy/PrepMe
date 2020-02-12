import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './src/Containers/Welcome';
import {AppStateProvider} from './src/Context';

const App = () => {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <Welcome />
      </NavigationContainer>
    </AppStateProvider>
  );
};

export default App;
