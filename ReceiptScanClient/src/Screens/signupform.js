import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Successscreen from './successfullogin.js';
import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: 'user', userEmail: 'Email', userPic: 'pic'};
  }

  _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.setState({
        id: result.id,
        userName: result.name,
        userEmail: result.email,
        userPic: result.picture.data.url,
      });
      AsyncStorage.setItem('UserName', this.state.userName);
      AsyncStorage.setItem('Email', this.state.userEmail);
      AsyncStorage.setItem('UserPic', this.state.userPic);
      //  SharedPreferences.setItem("UserName", this.state.userName);
      //       SharedPreferences.setItem("Email", this.state.userEmail);
      //       SharedPreferences.setItem("UserPic", this.state.userPic);
      console.log(
        'Id: ' +
          this.state.id +
          '\n Picture: ' +
          this.state.userPic +
          '\n Name: ' +
          this.state.userName +
          '\n Email: ' +
          this.state.userEmail,
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <ImageBackground
          source={require('../data/nearmoonbackground.png')}
          style={{width: '100%', height: '100%'}}>
          <View style={styles.barformat}>
            <Text style={styles.header}>Login Page </Text>
            <View style={{marginTop: 20}}>
              <LoginButton
                publishPermissions={['publish_actions']}
                readPermissions={['public_profile']}
                style={styles.facebookbutton}
                onLoginFinished={(error, result) => {
                  AccessToken.getCurrentAccessToken().then(result => {
                    if (result) {
                      console.log('SUCCESS');
                      this.props.navigation.navigate('Entry');

                      const infoRequest = new GraphRequest(
                        '/me?fields=id,name,email,picture.type(large)',
                        null,
                        this._responseInfoCallback,
                      );
                      new GraphRequestManager().addRequest(infoRequest).start();
                    } else {
                      console.log('Failure');
                      alert('Login Failed'); // Anything you want to do if login failed.
                    }
                  });
                }}
                onLogoutFinished={() => LoginManager.logOut()}
              />
            </View>
            <View style={{marginTop: 10}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Entry')}>
                <Text style={styles.btntext}>Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  barformat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  header: {
    fontSize: 40,
    paddingBottom: 100,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
    color: 'white',
  },
  textinput: {
    marginLeft: 50,
    marginRight: 50,
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  facebookbutton: {
    height: 30,
    width: 175,
  },
  btntext: {
    fontWeight: 'bold',
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Entry: {screen: Successscreen, navigationOptions: {header: null}},
    Login: {screen: LoginPage, navigationOptions: {header: null}},
  },
  {initialRouteName: 'Login'},
);

const App = createAppContainer(AppStackNavigator);
export default App;
