import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
  Drawer,
  withTheme,
  Switch,
  TouchableRipple,
  Text,
  Colors,
} from 'react-native-paper';
import type { Theme } from 'react-native-paper/types';

type Props = {
  theme: Theme,
  toggleTheme: Function,
  toggleRTL: Function,
  isRTL: boolean,
  isDarkTheme: boolean,
};

type State = {
  open: boolean,
  drawerItemIndex: number,
};

const DrawerItemsData = [
  { label: 'Include', icon: 'inbox', key: 0 },
  { label: 'Exclude', icon: 'star', key: 1 },
  { label: 'Nutrition', icon: 'send', key: 2 },
  { label: 'Find', icon: 'send', key: 3 }
 // { label: 'Colored label', icon: 'color-lens', key: 3 },
 // { label: 'A very long title that will be truncated', icon: 'delete', key: 4 },
];

const DrawerItemsPref = [
  { label: 'About', icon: '', key: 0},
  { label: 'Help' , icon: '', key: 1}
]

class DrawerItems extends React.Component<Props, State> {
  state = {
    open: false,
    drawerItemIndex: 0,
  };

  _setDrawerItem = index => this.setState({ drawerItemIndex: index });

  render() {
    const { colors } = this.props.theme;

    return (
      <View style={[styles.drawerContent, { backgroundColor: colors.surface }]}>
        <Drawer.Section title="Example items">
          {DrawerItemsData.map((props, index) => (
            <Drawer.Item
              {...props}
              key={props.key}
              theme={
                props.key === 3
                  ? { colors: { primary: Colors.tealA200 } }
                  : undefined
              }
              active={this.state.drawerItemIndex === index}
              onPress={() => this._setDrawerItem(index)}
            />
          ))}
        </Drawer.Section>

         <Drawer.Section title="History">
          <TouchableRipple onPress={this.props.toggleTheme}>
            <View style={styles.preference}>
              <Text>Search 1</Text>
            </View>
          </TouchableRipple>

        </Drawer.Section>

        <Drawer.Section title="Preferences">
          { DrawerItemsPref.map((props, index) => (
            <Drawer.Item
              {...props}
              key={props.key}
              theme={
                props.key === 3
                  ? { colors: { primary: Colors.tealA200 } }
                  : undefined
              }
              active={this.state.drawerItemIndex === index}
              onPress={() => this._setDrawerItem(index)}
            />
          ))}

        </Drawer.Section>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default withTheme(DrawerItems);