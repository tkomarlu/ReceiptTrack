import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CategorySpending from './categoryspending.js'
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class CostList extends Component {
  state = {
    items,
  };
  render() {
    const { itemlist } = this.state;
    let Prices = 0;
    this.state.items.map((item) => {
      Prices += item.price;
    })
    return (
      <React.Fragment>
      <View style={{flex:1}}>
      <TopBar/>
      <View style={{flex:1}}>
      <FlatList
          horizontal={false}
          data={this.state.items}
          renderItem={({item, index}) => <Scroller item={item} />}
          keyExtractor={item => item._id}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress = {() => this.props.navigation.navigate('Category')}>
      <Text> Click here to check your costs </Text>
      </TouchableOpacity>
      </View>
      </React.Fragment>
    );
  }
}

// Bar describing structure of list

class TopBar extends Component {
  render() {
    return (
      <View style={{flex: 0.1}}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
           <View style={{ flex: 1 }}>
              <Text style={styles.topbartext}>Item</Text>
           </View>
           <View style={{ flex: 1 }}>
              <Text style={styles.topbartext}>Quantity</Text>
           </View>
           <View style={{ flex: 1 }}>
              <Text style={styles.topbartext}>Price</Text>
           </View>
          </View>
          </View>
        );
      }
    }

// List entries and Scroller

const items=[
{name:  'Devin', quantity:  1, price:  60},
{name:  'James', quantity:  1, price:  60},
{name:  'Jackson', quantity:  1, price:  60},
{name:  'Jackson', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
{name:  'Devin', quantity:  1, price:  60},
];

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
                          <Text style={styles.listtext}>{item.name}</Text>
                       </View>
                       <View style={{ flex: 1 }}>
                          <Text style={styles.listtext}>{item.quantity}</Text>
                       </View>
                       <View style={{ flex: 1 }}>
                          <Text style={styles.listtext}>{item.price}</Text>
                       </View>
                      </View>
                      </View>
        );
    }
  }



// Style of the font

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "row",
   marginBottom: 10,
  },
  listtext: {
    textAlign: 'center',
    fontSize: 20,
  },
  topbartext: {
  textAlign: 'center',
  fontSize: 20},
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 10
  },
})

const AppStackNavigator = createStackNavigator ({
  Costscreen: {screen: CostList, navigationOptions: {
      header: null,
    }},
  Category: {screen: CategorySpending},
},
  {initialRouteName: 'Costscreen'}
)

const App = createAppContainer(AppStackNavigator);
export default App;
