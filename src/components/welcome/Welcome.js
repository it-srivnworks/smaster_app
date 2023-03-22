import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from './HomePage';
import Login from './Login';

const Stack = createNativeStackNavigator();

const Welcome = () => {
  return (
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='welcome' component={HomePage} />
    </Stack.Navigator>
  );
};

export default Welcome;
