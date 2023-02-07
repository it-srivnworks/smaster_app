import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LibraryHome from '../library/LibraryHome';
import Test1 from '../library/Test1';
import Test2 from '../library/Test2';
import Test3 from '../library/Test3';
import Dashboard from './Dashboard';

const BottomTab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#FFF',
        //tabBarInactiveBackgroundColor: '#083b66',
        tabBarLabelStyle: {color : '#FFF', fontSize: 12},
        tabBarStyle: {
          height: 60,
          left: 4,
          right: 4,
          bottom: 4,
          position: 'absolute',
          borderRadius: 15,
          backgroundColor: '#083b66',
        },
      }}>
      <BottomTab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../../../src/assets/images/home.png')}
                resizeMode="contain"
                style={styles.tabLogos}></Image>
            </View>
          ),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="library"
        component={LibraryHome}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../../../src/assets/images/library.png')}
                resizeMode="contain"
                style={styles.tabLogos}></Image>
            </View>
          ),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="test1"
        component={Test1}
        options={{
          tabBarLabel: 'Test1',
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../../../src/assets/images/home.png')}
                resizeMode="contain"
                style={styles.tabLogos}></Image>
            </View>
          ),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="test2"
        component={Test2}
        options={{
          tabBarLabel: 'Test2',
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../../../src/assets/images/home.png')}
                resizeMode="contain"
                style={styles.tabLogos}></Image>
            </View>
          ),
        }}></BottomTab.Screen>
      <BottomTab.Screen
        name="test3"
        component={Test3}
        options={{
          tabBarLabel: 'Test3',
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../../../src/assets/images/library.png')}
                resizeMode="contain"
                style={styles.tabLogos}></Image>
            </View>
          ),
        }}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  tabLogos: {
    width: 40,
    height: 40,
  },
  tabLogoTxt: {
    width: 35,
    height: 35,
  },
});
