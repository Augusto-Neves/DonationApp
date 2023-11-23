import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routesNames';
import {Login} from '../screens/Login/Login';
import {Registration} from '../screens/Registration/Registration';

const Stack = createStackNavigator();

export function NoAuthenticatedNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
}
