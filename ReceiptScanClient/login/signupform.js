import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet,
   Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Successscreen from '../successfullogin.js'

class LoginPage extends Component{
  constructor(props) {
      super(props);
      this.state = { user: 'user', email: 'Email' };
    }
  render() {
    return (
      <View style={styles.barformat}>
      <Text style={styles.header}>Login Page </Text>
      <TextInput style={styles.textinput} placeholder="Your e-mail"
      onChangeText={(user) => this.setState({user})}
      contact={this.state.user}
      returnKeyType = "next"
      underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder="Your password" secureTextEntry={true}
      underlineColorAndroid={'transparent'} />
      <Text style={{color: 'blue'}}
      onPress={() => this.props.navigation.navigate('Register')}>
      Not signed up? Click here to create an account.
      </Text>
      <TouchableOpacity style={styles.button} onPress = {() => this.props.navigation.navigate('Entry')}>
      <Text style={styles.btntext}>Login </Text>
      </TouchableOpacity>
      </View>
    );
  }
}


class RegisterPage extends Component{
  constructor(props) {
      super(props);
      this.state = { name: 'Enter a name', email: 'Email' };
    }
  render() {
    return (
      <View style={styles.signuptitle}>
      <Text style={styles.header}>Registration Page </Text>
      <TextInput style={styles.textinput} placeholder="Your name"
      onChangeText={(name) => this.setState({name})}
      fullname={this.state.name}
      returnKeyType = "next"
      underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder="Your e-mail"
      onChangeText={(email) => this.setState({email})}
      contact={this.state.email}
      returnKeyType = "next"
      underlineColorAndroid={'transparent'} />
      <TextInput style={styles.textinput} placeholder="Your password" secureTextEntry={true}
      underlineColorAndroid={'transparent'} />
      <TouchableOpacity style={styles.button} onPress = {() => this.props.navigation.navigate('Success')}>
      <Text style={styles.btntext}>Sign up </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

class Signupsuccess extends Component{
  render() {
    return (
      <View style={styles.signuptitle}>
      <Text style={styles.workingsignup}>Thanks for signing up. We have sent an e-mail to the address</Text>
      <TouchableOpacity style={styles.button} onPress = {() => this.props.navigation.navigate('Entry')}>
      <Text style={styles.btntext}>Continue </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  barformat: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 150,
  },
  signuptitle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
  },
  header: {
    fontSize:24,
    paddingBottom: 40
  },
  workingsignup: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
  }
  ,
  textinput: {
    marginLeft: 50,
    marginRight: 50,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    borderBottomWidth:1
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 30
  },
  btntext: {
    fontWeight: 'bold'
  }
});

const AppStackNavigator = createStackNavigator ({
  Register: {screen: RegisterPage},
  Success: {screen: Signupsuccess},
  Entry: {screen: Successscreen,
    navigationOptions: {header: null,}},
  Login: {screen: LoginPage}
},
  {initialRouteName: 'Login'}
)

const App = createAppContainer(AppStackNavigator);
export default App;
