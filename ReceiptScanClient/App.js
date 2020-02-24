import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,
   Text, View, TextInput, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Form from './login/signupform.js'


export default class login extends Component{
  render() {
    return (
      <View style={styles.container}>
      <Form />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center'
  },
});

console.disableYellowBox = true;
