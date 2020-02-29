import React from 'react';
import {View, StyleSheet, SectionList} from 'react-native';

import {ListItem, Divider, SearchBar} from 'react-native-elements';

const ORANGE = '#FF9500';
const BLUE = '#007AFF';
const GREEN = '#4CD964';
const RED = '#FF3B30';
const GREY = '#8E8E93';
const PURPLE = '#5856D6';
const TEAL_BLUE = '#5AC8FA';

const sections = [
  {
    data: [
      {
        title: 'Setting 1',
        icon: 'ios-settings',
        backgroundColor: ORANGE,
        hideChevron: true,
        checkbox: true,
      },
      {
        title: 'Setting 2',
        backgroundColor: BLUE,
        icon: 'ios-settings',
        hideChevron: true,
        checkbox: true,
      },
      {
        title: 'Setting 3',
        backgroundColor: GREEN,
        icon: 'ios-settings',
        hideChevron: true,
        checkbox: true,
      },
      {
        title: 'Setting 4',
        backgroundColor: PURPLE,
        icon: 'ios-settings',
        hideChevron: true,
        checkbox: true,
      },
      {
        title: 'Setting 5',
        backgroundColor: RED,
        icon: 'ios-settings',
        hideChevron: true,
        checkbox: true,
      },
    ],
  },
];

export default class Settings extends React.PureComponent {
  state = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  };
  onePressed() {
    if (this.state.one == false) {
      this.setState({one: true});
    } else {
      this.setState({one: false});
    }
  }

  twoPressed() {
    if (this.state.two == false) {
      this.setState({two: true});
    } else {
      this.setState({two: false});
    }
  }

  threePressed() {
    if (this.state.three == false) {
      this.setState({three: true});
    } else {
      this.setState({three: false});
    }
  }

  fourPressed() {
    if (this.state.four == false) {
      this.setState({four: true});
    } else {
      this.setState({four: false});
    }
  }

  fivePressed() {
    if (this.state.five == false) {
      this.setState({five: true});
    } else {
      this.setState({five: false});
    }
  }

  renderItem = ({
    item: {title, backgroundColor, icon, rightTitle, hideChevron, checkbox},
  }) => (
    <ListItem
      containerStyle={{paddingVertical: 8}}
      switch={checkbox}
      checked={this.state.one}
      key={title}
      onPress={() => this.onePressed()}
      chevron={!hideChevron}
      rightTitle={rightTitle}
      leftIcon={{
        type: 'ionicon',
        name: icon,
        size: 20,
        color: 'white',
        containerStyle: {
          backgroundColor,
          width: 28,
          height: 28,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      title={title}
    />
  );

  renderSectionHeader = () => <View style={styles.headerSection} />;

  ItemSeparatorComponent = () => (
    <View style={styles.separatorComponent}>
      <Divider style={styles.separator} />
    </View>
  );

  ListHeaderComponent = () => (
    <View>
      <SearchBar platform="android" placeholder="Search" />
      <Divider />
    </View>
  );

  keyExtractor = (item, index) => index;

  render() {
    return (
      <SectionList
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={this.ListHeaderComponent}
        contentContainerStyle={styles.containerStyle}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        ItemSeparatorComponent={this.ItemSeparatorComponent}
        SectionSeparatorComponent={Divider}
        stickySectionHeadersEnabled={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
  },
  separatorComponent: {
    backgroundColor: 'white',
  },
  separator: {
    marginLeft: 58,
  },
  headerSection: {
    height: 30,
  },
});
