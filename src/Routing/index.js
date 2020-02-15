import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreenContainer from '../Containers/WelcomeScreenContainer';
import OnboardingScreenContainer from '../Containers/OnboardingScreenContainer';
import { ONBOARDING_SCREEN, WELCOME_SCREEN } from './routeConstants';

const AppSource = () => {
  let AppContainer = createAppContainer(
    createSwitchNavigator(
      {
        [WELCOME_SCREEN]: WelcomeScreenContainer,
        [ONBOARDING_SCREEN]: OnboardingScreenContainer,
      },
      {
        initialRouteName: WELCOME_SCREEN,
      },
    ),
  );
  return <AppContainer />;
};

export default AppSource;
