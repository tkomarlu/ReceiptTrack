import React, {Component} from 'react';
import {
  AppRegistry,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CategorySpending from './categoryspending.js';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Items from '../data/test1.json';
import ModalDropdown from 'react-native-modal-dropdown';

class CostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Selection: Items.MonthlyRecording,
      Chart: [],
      Categories: [],
    };
  }

  render() {
    var subselection = this.state.Chart;
    var choices = subselection
      .filter(item => item.z == this.state.Categories)
      .map(({x, y, z}) => ({x, y, z}));
    return (
      <React.Fragment>
        <View style={{flex: 1}}>
          <View style={{marginTop: 20, marginBottom: 10}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              {' '}
              List of Costs{' '}
            </Text>
          </View>
          <TopBar />
          <View style={styles.row}>
            <View style={{marginLeft: 25, marginTop: 10}}>
              <ModalDropdown
                onSelect={(index, value) =>
                  this.setState({Chart: this.state.Selection[value]})
                }
                options={['January', 'February', 'March', 'April']}
                textStyle={{fontSize: 20, paddingTop: 8, paddingBottom: 8}}
                dropdownTextStyle={{fontSize: 14, color: 'black'}}
              />
            </View>
            <View style={{position: 'absolute', right: 20, bottom: 0}}>
              <ModalDropdown
                onSelect={(index, value) => this.setState({Categories: value})}
                options={['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4']}
                textStyle={{fontSize: 20, paddingTop: 8, paddingBottom: 8}}
                dropdownTextStyle={{fontSize: 14, color: 'black'}}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              horizontal={false}
              data={choices}
              renderItem={({item, index}) => <Scroller item={item} />}
              keyExtractor={item => item._id}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Category')}>
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
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.topbartext}>Item</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.topbartext}>Price</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.topbartext}>Category</Text>
          </View>
        </View>
      </View>
    );
  }
}

// List entries and Scroller

class Scroller extends Component {
  state = {
    quantity: 0,
  };

  render() {
    const {item} = this.props;

    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={styles.listtext}>{item.x}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.listtext}>{item.y}</Text>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.listtext}>{item.z}</Text>
          </View>
        </View>
      </View>
    );
  }
}

// Style of the font
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  listtext: {
    textAlign: 'center',
    fontSize: 20,
  },
  rows: {
    flex: 1,
    flexDirection: 'row',
  },
  topbartext: {
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Costscreen: {screen: CostList, navigationOptions: {header: null}},
    Category: {screen: CategorySpending, navigationOptions: {header: null}},
  },
  {initialRoutex: 'Costscreen'},
);

const App = createAppContainer(AppStackNavigator);
export default App;
