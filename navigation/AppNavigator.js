import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';

import MainScreen from '../screens/MainScreen'
import BioScreen from '../screens/BioScreen'
import GoalScreen from '../screens/GoalScreen'
import UploadScreen from '../screens/UploadScreen'
import Pref1Screen from '../screens/Pref1Screen'
import Pref2Screen from '../screens/Pref2Screen'
import SuggestScreen from '../screens/SuggestScreen'
import Test from '../screens/Test'
 
//export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //Main: MainTabNavigator,
//});

export default createStackNavigator({
	Test : { screen : Test },
	MainScreen : { screen : MainScreen },
	BioScreen : { screen : BioScreen },
	GoalScreen : { screen : GoalScreen },
	UploadScreen : { screen : UploadScreen },
	Pref1Screen : { screen : Pref1Screen },
	Pref2Screen : { screen : Pref2Screen },
	SuggestScreen : { screen : SuggestScreen },
})