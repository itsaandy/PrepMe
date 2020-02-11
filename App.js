import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './src/Containers/Welcome';

const App = () => {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
};

export default App;
