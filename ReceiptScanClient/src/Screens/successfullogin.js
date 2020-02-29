import * as React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {
  TabViewAnimated,
  TabView,
  TabBar,
  SceneMap,
} from 'react-native-tab-view';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Records from './costscreen.js';
import Homescreen from './Homescreen.js';
import Monthlycosts from './Monthlycosts.js';
import Settingscreen from './settings.js';

const TabNavigator = createBottomTabNavigator(
  {
    Home: Homescreen,
    Record: Records,
    Tracker: Monthlycosts,
    Settings: Settingscreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#4169E1',
      },
      labelStyle: {
        fontSize: 16,
      },
    },
  },
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'blue',
    fontSize: 16,
  },
  red: {
    color: 'red',
  },
});
