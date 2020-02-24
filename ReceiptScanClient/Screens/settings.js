import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Container, Header, Body, Content, CheckBox} from 'native-base';

export default class Setup extends Component{

  state={
    one:false,
    two:false
  }
  onePressed(){
    if (this.state.one==false){
    this.setState({one:true});
  } else {
    this.setState({one:false});
  }
}

  twoPressed(){
    if (this.state.two==false){
    this.setState({two:true});
  } else {
    this.setState({two:false});
  }
}

  render(){
    return(
      <Container>
      <Content>
        <Card>
          <CardItem header style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 20}}> Settings Page</Text>
          </CardItem>

          <CardItem body>
          <CheckBox checked={this.state.one}
          onPress={() => this.onePressed()}
          style={{marginRight:20}}
          />
          <Text>Setting 1</Text>
          </CardItem>

          <CardItem body>
          <CheckBox checked={this.state.two}
          onPress={() => this.twoPressed()}
          style={{marginRight:20}}
          />
          <Text>Setting 2</Text>
          </CardItem>
          </Card>
          </Content>
          </Container>

    )
  }
}
