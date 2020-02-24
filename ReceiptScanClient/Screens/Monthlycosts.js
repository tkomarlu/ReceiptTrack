import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, TouchableOpacity, Image, Icon } from 'react-native';
import * as Progress from 'react-native-progress';
import ActionButton from 'react-native-action-button'

export default class CostList extends Component {
  render() {
    return (
      <React.Fragment>
      <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ textAlign: 'center', fontSize: 20}}>Cost Tracker </Text>
      </View>
      <Progressbar/>
      <TopBar/>
      <Scroller/>
      <CameraButton/>
      </React.Fragment>
    );
  }
}

class CameraButton extends Component {
  render(){
    return(
    <View style={styles.buttonsettings}>
    <ActionButton buttonColor="rgba(231,76,60,1)">
</ActionButton>
</View>
)
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


class Scroller extends Component {

            state = {
              data: [
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'James' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Jackson' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Jackson' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
      {item1: { text: 'Devin' }, item2: { text: 1 }, item3: { text: 60}},
    ]
  }

              renderItem=({item, index}) => {
                return(
                  <View style={styles.container}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                       <View style={{ flex: 1 }}>
                          <Text style={{ textAlign: 'center', fontSize: 20}}>{item.item1.text}</Text>
                       </View>
                       <View style={{ flex: 1 }}>
                          <Text style={{ textAlign: 'center', fontSize: 20}}>{item.item2.text}</Text>
                       </View>
                      </View>
                      </View>
                    );
                }

    keyExtractor = (item, index) => `${index}`;

    render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={false}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
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
  buttonsettings: {
      width:90,
      height:75,
      flexDirection: 'row',
      textAlign: 'right',
      left: 280,
      top: 20,
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },

})

// skip this line if using Create React Native App
