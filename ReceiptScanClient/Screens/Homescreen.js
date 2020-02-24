import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { VictoryBar, VictoryStack, VictoryChart, VictoryTheme, VictoryLegend } from "victory-native";

export default class CostList extends Component {
  render() {
    return (
      <React.Fragment>
      <View style={{flex: 0.25, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{textAlign: 'center', fontSize: 20}}>Home Page </Text>
      </View>
      <View style={styles.container}>
      <VictoryChart width={300} height={400} theme={VictoryTheme.material} domainPadding={10} domain={{ y: [0, 10] }}>
      <VictoryStack
      colorScale={["blue", "red"]}>
      <VictoryBar
        data={[{x: "Category 1", y: 5}, {x: "Category 2", y: 3}, {x: "Category 3", y: 5}]}
        alignment='start'
        width={1}
      />
      <VictoryBar
        data={[{x: "Category 1", y: 1}, {x: "Category 2", y: 4}, {x: "Category 3", y: 5}]}
        alignment='start'
        width={1}
      />
      <VictoryChart domain={[0, 5]}>
        <VictoryLegend x={100} y={0}
    	title="Legend"
      centerTitle
      orientation="horizontal"
      gutter={10}
      colorScale={[ "blue", "red" ]}
      style={{ border: { stroke: "black" }, title: {fontSize: 12 } }}
      data={[
        { name: "Cat. 1"},
        { name: "Cat. 2"}
      ]}>
      </VictoryLegend>
      </VictoryChart>
  </VictoryStack>
  </VictoryChart>
  </View>

    </React.Fragment>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});
