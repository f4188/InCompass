import React from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';

import { ButtonGroup, Icon } from 'react-native-elements'

import { MonoText } from '../components/StyledText';
//import { Button } from 'react-native';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
/*
<Image
              source={
                __DEV__
                  ? require('../assets/images/compass.png')
                  : require('../assets/images/compass.png')
              }
              style={styles.welcomeImage}
          />
*/

//import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Appbar, Surface, Button } from 'react-native-paper';
//import ExampleList, { examples } from './ExampleList';

/*const routes = Object.keys(examples)
  .map(id => ({ id, item: examples[id] }))
  .reduce((acc, { id, item }) => {
    const Comp = item;
    const Screen = props => <Comp {...props} />;

    Screen.navigationOptions = props => ({
      ,
      /* $FlowFixMe 
      ...(typeof Comp.navigationOptions === 'function'
        ? Comp.navigationOptions(props)
        : Comp.navigationOptions),
    });

    return {
      ...acc,
      [id]: { screen: Screen },
    };
  }, {});

export default createStackNavigator(
  {
    home: { screen: ExampleList },
    ...routes,
  },
);*/


export default class MainScreen extends React.Component {
  
  static navigationOptions = ({ navigation }) => ({
      header: (
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          
        </Appbar.Header>
      )
  })

  constructor(props) {

    super(props)
    this._onPressSurfaceButton = this._onPressSurfaceButton.bind(this)

  }

  static defaultProps = {

      confirmFontFamily: { fontFamily: Platform.OS === 'android' ? 'normal' : 'Avenir', fontWeight: 'bold' },
      confirmText: "Choose"
      
  }

  _onPressSurfaceButton(screen) {
    this.props.navigation.navigate(screen)
  }


  _onPressFind() {
    this.props.navigation.navigate('SuggestScreen', { edamamParams: {ingredients: 'chicken'} })
  }

  _renderSurfaceButton(buttonTitle, screen) {

    return (
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={ () => this._onPressSurfaceButton(screen) }>
        <Surface style={styles.surface}>
          <Text> {buttonTitle} </Text>
        </Surface>
      </TouchableOpacity>
    )
  }

  _renderButton2(buttonTitle, screen) {

    return (
      <Button style={[{ flex: 1 }, styles.surface]} mode="contained" onPress={ () => this._onPressSurfaceButton(screen) }>
          <Text> {buttonTitle} </Text>
      </Button>
    )
  }

  _renderButton3(buttonTitle, screen, color, iconName) {
    return (
      <TouchableOpacity style={[styles.touchableButton, { backgroundColor: color || 'grey'}]} onPress={()=> this._onPressSurfaceButton(screen)}>
        <Icon name={iconName} size={50} />
        <Text> {buttonTitle} </Text>
      </TouchableOpacity>
    )
  }

  render() {

    //const { confirmText } = this.props
    const confirmText = "Go to"

    return (
      <View style={styles.mainContainer}>
   
        <View style={styles.content}>

          <View style={{ flex: 1, flexDirection: 'row' }}>
          {this._renderButton3('Include Ingredients', 'Pref1Screen', '#27ae60', 'local-grocery-store')}

          {this._renderButton3('Exclude Ingredients', 'Pref2Screen', '#c0392b', 'local-grocery-store')}
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
          {this._renderButton3('Macronutrients', 'ReportScreen', 'lightgrey', 'multiline-chart')}

          {this._renderButton3('Micronutrients')}
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
          {this._renderButton3('Silverberry')}
          {this._renderButton3('Find Recipes', 'SuggestScreen', 'lightgrey', 'restaurant')}
          </View>

        </View>
       
      </View>
    );


  }

}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flex: 1
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  //marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  screenButtonColumn : { 
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'stretch' 
  },
  screenButtonRow : { 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'stretch' 
  },
  buttonStyle : {
  //  margin: 10,

  },
  screenButton: {
    flex: 1,
    justifyContent: 'center'
  },
  screenButtonText: { 

   /// color: '#1111', 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  confirmText : {},
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4F80E1',
 // marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
  surface: {
    flex: 1,
  //  alignItems: 'stretch',
    margin: 2,
   // padding: 8,
   // height: wp(45),
   // width: wp(45),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  touchableButton : {
    flex: 1,
    margin: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2, // Android
  //  height: 50,
  //  width: 100,
    justifyContent: 'center',
    alignItems: 'center',
   // flexDirection: 'row',
  }

});