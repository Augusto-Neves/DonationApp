import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routesNames';
import {Home} from '../screens/Home/Home';

const Stack = createStackNavigator();

export function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
}
