import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Welcome from '../Containers/Welcome';

const AppSource = () => {
  let AppContainer = createAppContainer(
    createSwitchNavigator(
      {
        home: Welcome,
      },
      {
        initialRouteName: 'home',
      },
    ),
  );
  return <AppContainer />;
};

export default AppSource;
