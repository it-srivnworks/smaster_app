import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Welcome from './src/components/welcome/Welcome';

const App = () => {
  return (
    <NavigationContainer>
        <Welcome></Welcome>
    </NavigationContainer>  
  );
};

export default App;
