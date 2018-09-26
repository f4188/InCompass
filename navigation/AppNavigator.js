import React from 'react';
import { createSwitchNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';

import MainScreen from '../screens/MainScreen'
//import BioScreen from '../screens/BioScreen'
//import GoalsScreen from '../screens/GoalsScreen'
import UploadScreen from '../screens/UploadScreen'
import Pref1Screen from '../screens/Pref1Screen'
import Pref2Screen from '../screens/Pref2Screen'
import ReportScreen from '../screens/ReportScreen'
import SuggestScreen from '../screens/SuggestScreen'

import { Appbar } from 'react-native-paper';


//import { KeepAwake, Util } from 'expo';
//import * as React from 'react';
import { StatusBar, I18nManager, AsyncStorage, Platform } from 'react-native';
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme,
} from 'react-native-paper';
import createReactContext from 'create-react-context';

const PreferencesContext: any = createReactContext();
//import {  } from 'react-navigation';
//import RootNavigator from './src/RootNavigator';
import DrawerItems from './DrawerItems';
//import type { Theme } from 'react-native-paper/types';

 

//export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //Main: MainTabNavigator,
//});

const RootNavigator = createStackNavigator({

	MainScreen : { screen : MainScreen },
	Pref1Screen : { screen : Pref1Screen },
	Pref2Screen : { screen : Pref2Screen },

	ReportScreen : { screen : ReportScreen },
	UploadScreen : { screen : UploadScreen },
	SuggestScreen : { screen : SuggestScreen },
	
}, {
	navigationOptions: ({ navigation }) => ({
      header: (
        <Appbar.Header>
          <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
          <Appbar.Content title="Examples" />
        </Appbar.Header>
      ),
    }),
 })

 const DrawerApp = createDrawerNavigator(
  { Home: { screen: RootNavigator } },
  {
    contentComponent: () => (
          <DrawerItems/>
    ),
    // set drawerPosition to support rtl toggle on android
    drawerPosition:
      Platform.OS === 'android' && (I18nManager.isRTL ? 'right' : 'left'),
  }
);

 export default DrawerApp