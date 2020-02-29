import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import {
  VictoryBar,
  VictoryStack,
  VictoryChart,
  VictoryTheme,
  VictoryLegend,
} from 'victory-native';
import ModalDropdown from 'react-native-modal-dropdown';
import MonthlyCategory from '../data/monthlyrecording1.json';

var MonthlyCosts = MonthlyCategory;

export default class CostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Selection: MonthlyCosts.MonthlyRecording,
      Chart: [],
    };
  }
  render() {
    return (
      <React.Fragment>
        <ImageBackground
          source={require('../data/blue3.jpg')}
          style={{width: '100%', height: '100%'}}>
          <View
            style={{
              flex: 0.25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Monthly Costs{' '}
            </Text>
            <ModalDropdown
              onSelect={(index, value) =>
                this.setState({Chart: this.state.Selection[value]})
              }
              options={['January', 'February', 'March', 'April']}
              textStyle={{fontSize: 16, paddingTop: 8, paddingBottom: 8}}
              dropdownTextStyle={{fontSize: 14, color: 'black'}}
            />
          </View>
          <View style={styles.container}>
            <VictoryChart
              width={300}
              height={400}
              theme={VictoryTheme.material}
              domainPadding={10}>
              <VictoryBar
                style={{data: {fill: 'blue'}}}
                data={this.state.Chart}
                alignment="start"
                width={1}
              />
            </VictoryChart>
          </View>
        </ImageBackground>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
