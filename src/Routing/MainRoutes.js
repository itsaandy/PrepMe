import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ONBOARDING_SCREEN, WELCOME_SCREEN, HOME_SCREEN} from './routeConstants';
import HomeScreenContainer from '../Containers/Screens/HomeScreenContainer';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN}>
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
