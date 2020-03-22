import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME_SCREEN, ONBOARDING_SCREEN, WELCOME_SCREEN} from './routeConstants';
import WelcomeScreenContainer from '../Containers/Screens/WelcomeScreenContainer';
import SubjectsScreenContainer from '../Containers/Screens/SubjectsScreenContainer';
import HomeScreenContainer from '../Containers/Screens/HomeScreenContainer';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator initialRouteName={WELCOME_SCREEN}>
      <Stack.Screen
        name={WELCOME_SCREEN}
        component={WelcomeScreenContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ONBOARDING_SCREEN}
        component={SubjectsScreenContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeScreenContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
