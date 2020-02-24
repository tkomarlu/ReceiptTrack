import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import Records from "./Screens/costscreen.js"
import Homescreen from "./Screens/Homescreen.js"
import Monthlycosts from "./Screens/Monthlycosts.js"
import Settingscreen from "./Screens/settings.js"

const TabNavigator = createBottomTabNavigator({
  Home: Homescreen,
  Record: Records,
  Tracker: Monthlycosts,
  Settings: Settingscreen
});

export default createAppContainer(TabNavigator);
