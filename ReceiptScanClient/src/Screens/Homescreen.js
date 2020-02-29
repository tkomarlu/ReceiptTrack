import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Icon, Button, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';
import ActionButton from 'react-native-action-button'
import Items from '../data/categorydata.json'
import ImagePicker from "react-native-image-picker";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Gallery from '../camera/gallerypicker.js'

var items=Items

class CostList extends Component {
  lists = {
    items,
  };
  render() {
    const { navigate } = this.props.navigation;
    const { itemlist } = this.lists;
    let Prices = 0;
    this.lists.items.map((item) => {
      Prices += item.price;
    })
    return (
      <React.Fragment>
      <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, paddingTop: 30}}>Cost Tracker </Text>
      </View>
      <Progressbar/>
      <TopBar/>
			<View style={{flex: 0.5}}>
      <FlatList
          horizontal={false}
          data={this.lists.items}
          ItemSeparatorComponent = {FlatListItemSeparator}
          renderItem={({item, index}) => <Scroller item={item} />}
          keyExtractor={item => item._id}
        />
			</View>
      <View style={styles.buttonsettings}>
      <ActionButton buttonColor="rgba(231,76,60,1)" onPress = {() => navigate('Pics')}/>
  </View>
      </React.Fragment>
    );
  }
}

class Progressbar extends Component {
 render(){
   return (
     <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
     <Progress.Bar progress={0.3} width={300} height={20} />
     </View>
   )
 }
}

class TopBar extends Component {
  render() {
    return (
      <View style={{ flex: 0.1 }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
           <View style={{ flex: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 20}}>Category</Text>
           </View>
           <View style={{ flex: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 20}}>Amount Spent</Text>
           </View>
          </View>
          </View>
        );
      }
    }

FlatListItemSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }


		class Scroller extends Component {
		            state = {
		              quantity: 0,
		            }

		    render() {
		      const {item} = this.props

		    return (
		      <View style={styles.container}>
		                  <View style={{ flex: 1, flexDirection: 'row' }}>
		                       <View style={{ flex: 1 }}>
		                          <Text style={styles.listtext}>{item.Category}</Text>
		                       </View>
		                       <View style={{ flex: 1 }}>
		                          <Text style={styles.listtext}>{item.price}</Text>
		                       </View>
		                      </View>
		                      </View>
		        );
		    }
		  }


const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "row",
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
    margin: 10},
  progressBar: {
    width: 100,
    transform: [{ scaleX: 1.0 }, { scaleY: 2.5 }],
  },
	listtext: {
    textAlign: 'center',
    fontSize: 20,},
  buttonsettings: {
      width:90,
      height:75,
      flexDirection: 'row',
      textAlign: 'right',
      left: 280,
      top: 50,
    },
    placeholder: {
  borderWidth: 1,
  borderColor: "black",
  backgroundColor: "#eee",
  width: "70%",
  height: 280,
  marginTop:50,
},
button: {
  width: "80%",
  marginTop:20,
  flexDirection:"row",
  justifyContent: "space-around"
},
previewImage: {
    width: "100%",
    height: "100%"
},
actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },

})

const AppStackNavigator = createStackNavigator ({
  Home: {screen: CostList, navigationOptions: {
      header: null}},
  Pics: {screen: Gallery, navigationOptions: {
      header: null}}},
  {initialRoutex: 'Home'}
)

const App = createAppContainer(AppStackNavigator);
export default App;
