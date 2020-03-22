import React, {useContext} from 'react';
import OnboardingRoutes from './OnboardingRoutes';
import {AppState} from '../Context';
import { createStackNavigator } from '@react-navigation/stack';
import { WELCOME_SCREEN } from './routeConstants';

const Stack = createStackNavigator();

const ResolveCurrentRoute = (hasCompletedOnboarding) => {
  return <OnboardingRoutes/>;
};

const HandleRouting = () => {
  const {loading, hasCompletedOnboarding} = useContext(AppState)

  return (
      ResolveCurrentRoute(hasCompletedOnboarding)
  );
};

export default HandleRouting;
