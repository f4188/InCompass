import React from 'react';
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
  Slider,
  Button,
  Alert
} from 'react-native';

//import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { WebBrowser } from 'expo';
import Slider2 from 'react-native-slider';
import { MonoText } from '../components/StyledText';
import { TagSelect } from 'react-native-tag-select';

import { Divider, Appbar } from 'react-native-paper'

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

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

export default class ReportScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false,//!this.state.dropdownOpen,
      protein: 0.5, 
      fat: 0.5, 
      carbs: 0.5,
      value: 0.5,
      list : [{key : 'Low Fat Diet Affectiveness'}, { key : 'Low Carb Diet Affectiveness' } , { key : 'Low Protein Intake Risk' } , { key : 'Mediterranean Diet Affectiveness' } ]
    }

    this.toggle = this.toggle.bind(this)

  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  _renderSlider() {

    return (
      <SliderExample value={0.4} />
    )
  }

  render() {

    //const DIET = ['balanced', 'high-protein', 'high-fiber', 'low-fat', 'low-carb', 'low-sodium']
    const HEALTH_LABELS =  ['vegan', 'vegetarian', 'paleo', 'dairy-free', 'gluten-free', 
  'wheat-free', 'fat-free', 'low-sugar','egg-free', 'peanut-free', 
  'tree-nut-free', 'soy-free', 'fish-free', 'shellfish-free']

    const diet = [
      { id: 1, label: 'balanced' },
      { id: 2, label: 'high-protein' },
      { id: 3, label: 'high-fiber' },
      { id: 4, label: 'low-fat' },
      { id: 5, label: 'low-carb' },
      { id: 6, label: 'low-sodium' }
    ];

    const healthLabels = [ 
      { id: 1, label: 'vegan' },
      { id: 2, label: 'vegetarian' },
      { id: 3, label: 'paleo' },
      { id: 4, label: 'dairy-free' },
      { id: 5, label: 'gluten-free' },
      { id: 6, label: 'wheat-free' },
      { id: 7, label: 'fat-free' },
      { id: 8, label: 'low-sugar' },
      { id: 9, label: 'egg-free' },
      { id: 10, label: 'peanut-free' },
      { id: 11, label: 'tree-nut-free' },
      { id: 12, label: 'soy-free' },
      { id: 13, label: 'fish-free' },
      { id: 14, label: 'shellfish-free' } 
    ]

    const confirmText = "Submit"

     return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>


        <Slider2
          value={this.state.protein}
          onValueChange={protein => this.setState({ protein })}
        />
        <Text>
          Protein: {this.state.protein}
        </Text>
        <Slider2
          value={this.state.fat}
          onValueChange={fat => this.setState({ fat })}
        />
        <Text>
          Fat: {this.state.fat}
        </Text>
        <Slider2
          value={this.state.carbs}
          onValueChange={carbs => this.setState({ carbs })}
        />
        <Text>
          Carbs: {this.state.carbs}
        </Text>
        
        <Divider />

        <Text style={styles.labelText}>Diet</Text>
        <TagSelect
          data={diet}
          max={3}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
            <Button
              title="Clear"
              style={styles.button}
              onPress={() => {
                //Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
                Alert.alert('Selected count', `Total: ${this.tag.totalSelected}`);
              }}
            />
          </View>
        </View>

        <Divider />


        <Text style={styles.labelText}>Health Labels</Text>
        <TagSelect
          data={healthLabels}
          max={14}
          ref={(tag) => {
            this.tag = tag;
          }}
          onMaxError={() => {
            Alert.alert('Ops', 'Max reached');
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInner}>
            <Button
              title="Get selected count"
              style={styles.button}
              onPress={() => {
                //Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
                Alert.alert('Selected count', `Total: ${this.tag.totalSelected}`);
              }}
            />
          </View>
        </View>

        
        <Divider />

        <View style={styles.footer}>
        <Touchable accessibilityComponentType="button" onPress={()=>{}}>
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
            <Text style={[{ fontSize: 18, color: '#ffffff' }, styles.confirmText]}>
              {confirmText}
            </Text>
          </View>
        </Touchable> 
        </View>

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }, 
  content: {
    //marginVertical: 10,
    backgroundColor: 'white',
    flex: 1,
    //marginLeft: 10,
    //marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
 //   alignItems: "stretch",
   // justifyContent: "center"
  },
  footer: {
    flex: 0,
    height: 50,
  },
  buttonContainer: {
    padding: 15,
  },
  buttonInner: {
    marginBottom: 15,
  },
  labelText: {
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 15,
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',    
    backgroundColor: '#FFF',
  },
  label: {
    color: '#333'
  },
  itemSelected: {
    backgroundColor: '#333',
  },
  labelSelected: {
    color: '#FFF',
  }

});

class SliderExample extends React.Component {
  static defaultProps = {
    value: 0,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  render() {
    const textStyle = {
      color: this.state.value === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.9)',
      marginBottom: -2,
    };
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Text style={textStyle}>Value: {this.state.value && +this.state.value.toFixed(3)}</Text>
        </View>
        <Slider {...this.props} onValueChange={value => this.setState({ value })} />
        <View style={{ marginBottom: 10 }} />
      </View>
    );
  }
}
