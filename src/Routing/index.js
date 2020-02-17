import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeRoutes from './WelcomeRoutes';

const AppSource = () => {
  let AppContainer = createAppContainer(
    createSwitchNavigator(
      {
        WelcomeRoutes: WelcomeRoutes,
      },
      {
        initialRouteName: 'WelcomeRoutes',
      },
    ),
  );
  return <AppContainer />;
};

export default AppSource;
