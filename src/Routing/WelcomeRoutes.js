import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {ONBOARDING_SCREEN, WELCOME_SCREEN} from './routeConstants';
import WelcomeScreenContainer from '../Containers/Screens/WelcomeScreenContainer';
import SubjectsScreenContainer from '../Containers/Screens/SubjectsScreenContainer';

export default createStackNavigator(
  {
    [WELCOME_SCREEN]: {
      screen: WelcomeScreenContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
    [ONBOARDING_SCREEN]: {
      screen: SubjectsScreenContainer,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: WELCOME_SCREEN,
  },
);
