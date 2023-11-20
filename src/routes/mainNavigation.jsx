import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routesNames';
import {Home} from '../screens/Home/Home';
import {SingleDonation} from '../screens/SingleDonation/SingleDonation';

const Stack = createStackNavigator();

export function MainNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.SingleDonation} component={SingleDonation} />
    </Stack.Navigator>
  );
}
