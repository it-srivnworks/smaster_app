import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LibraryHome from '../library/LibraryHome';
import Test1 from '../library/Test1';
import Test2 from '../library/Test2';
import Test3 from '../library/Test3';
import Dashboard from './Dashboard';

const BottomTab = createMaterialBottomTabNavigator();

const HomePage = () => {
  return (
    <BottomTab.Navigator
      barStyle={{
        backgroundColor: '#083b66',
        borderWidth: 1,
        borderColor: '#FFF',
        height:80,
        borderRadius:80,
      }}>
      <BottomTab.Screen
        name="dashboard"
        component={Dashboard}></BottomTab.Screen>
      <BottomTab.Screen
        name="library"
        component={LibraryHome}></BottomTab.Screen>
      <BottomTab.Screen name="test1" component={Test1}></BottomTab.Screen>
      <BottomTab.Screen name="test2" component={Test2}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default HomePage;
