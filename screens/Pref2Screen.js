import React from 'react';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  FlatList,
  Button,
  Switch,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Dimensions,
  LayoutAnimation
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

const items = require('../items.json')

const defaultColors = {
  primary: '#3f51b5',
  success: '#4caf50',
  cancel: '#1A1A1A',
  text: '#2e2e2e',
  subText: '#848787',
  selectToggleTextColor: '#333',
  searchPlaceholderTextColor: '#999',
  searchSelectionColor: 'rgba(0,0,0,0.2)',
  chipColor: '#848787',
  itemBackground: '#fff',
  subItemBackground: '#ffffff',
  disabled: '#d7d7d7',
}

const tintColor = '#174A87'


const Toggle = props => (
  <TouchableWithoutFeedback onPress={() => props.onPress(!props.val)} disabled={props.disabled}>
    <View style={styles.switch}>
      <Text style={styles.label}>{props.name}</Text>
      <Switch onTintColor={tintColor} onValueChange={v => props.onPress(v)} value={props.val} />
    </View>
  </TouchableWithoutFeedback>
)

export default class Pref2Screen extends React.Component {

  static defaultProps = {
    itemFontFamily: { fontFamily: Platform.OS === 'android' ? 'normal' : 'Avenir', fontWeight: 'bold' },
    subItemFontFamily: { fontFamily: Platform.OS === 'android' ? 'normal' : 'Avenir', fontWeight: '200' },
    searchTextFontFamily: { fontFamily: Platform.OS === 'android' ? 'normal' : 'Avenir', fontWeight: '200' },
    confirmFontFamily: { fontFamily: Platform.OS === 'android' ? 'normal' : 'Avenir', fontWeight: 'bold' },
    confirmText: "Choose"
  }

  constructor(props){
    super(props)
    this.state = {
      selectedItems: [],
      selectedItems2 : []
    }
  }
  _onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  _onSelectedItemsChange2 = () => {}

  render() {
    
    const {
      confirmText,
      searchTextFontFamily,
      confirmFontFamily
    } = this.props

    const confirmFont = confirmFontFamily.fontFamily && confirmFontFamily

    return (
      <View styles={styles.mainContainer}>

        <View style={styles.content}>

          <View style={styles.header}>
            <Text style={{ color: '#333', fontSize: 24, fontWeight: 'bold' }}>
              Ingredients to Exclude
            </Text>
          </View>

          <ScrollView style={{ flex: 1 }}>
          <SectionedMultiSelect
            items={items}
            color="primary"
            uniqueKey='id'
            subKey='children'
            selectText='Click to select..'
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={this._onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
            onToggleSelector={this._onToggleSelector}
            onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}
            onCancel={this._onCancel}
            onConfirm={this._onConfirm}

            styles={{
              chipText: {
                 maxWidth: Dimensions.get('screen').width - 90,
              },
              itemText: {
                color: this.state.selectedItems2.length ? 'black' : 'lightgrey'
              },
              subItemText: {
                color: this.state.selectedItems2.length ? 'black' : 'lightgrey'
              },
             }}
          />
          </ScrollView>

          <View style={styles.border} />

          <View style={styles.options}>
            <Toggle name="Single" onPress={this._onSingleToggle} val={this.state.single} />
          </View>
        </View> 

        <View style={styles.footer}>
        <Touchable accessibilityComponentType="button" onPress={this._submitSelection}>
          <View
            style={[{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
             
              paddingVertical: 8,
              
              borderRadius: 0,
              backgroundColor: defaultColors.primary,
            },
            styles.button,
            ]}
          >
            <Text style={[{ fontSize: 18, color: '#ffffff' }, confirmFont, styles.confirmText]}>
              {confirmText}
            </Text>
          </View>
        </Touchable> 
        </View>


    
      </View>

    );
  }

  _submitSelection() {}

  _onSingleToggle() {}

  _onSelectedItemsChange2() {}
  _onSelectedItemObjectsChange() {}
  _onCancel() {}
  _onConfirm() {}
  _onToggleSelector() {}

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  toolbar: { 
    height: 20,
    backgroundColor: 'powderblue'
  },
  content: {

    //borderWidth: 2,
    height: Dimensions.get('screen').height-(30+40),
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    
    //margin: 20

  },
  footer: {
    flex: 0,
    height: 50,
    //borderWidth: 2
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,

  },
  options: {
    //borderWidth: 2,
    flex: 0,
    height: 40,
    marginVertical: 10,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
  },
  confirmText: {},
  switch: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  button: {}
});
