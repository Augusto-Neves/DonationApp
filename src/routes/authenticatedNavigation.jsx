import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './routesNames';
import {Home} from '../screens/Home/Home';
import {SingleDonation} from '../screens/SingleDonation/SingleDonation';
import {Payment} from '../screens/Payment/Payment';

const Stack = createStackNavigator();

export function AuthenticatedNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.SingleDonation} component={SingleDonation} />
      <Stack.Screen name={Routes.Payment} component={Payment} />
    </Stack.Navigator>
  );
}
