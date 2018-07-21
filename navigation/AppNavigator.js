import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

//import MainTabNavigator from './MainTabNavigator';

import MainScreen from '../screens/MainScreen'
import BioScreen from '../screens/BioScreen'
import GoalsScreen from '../screens/GoalsScreen'
import UploadScreen from '../screens/UploadScreen'
import Pref1Screen from '../screens/Pref1Screen'
import Pref2Screen from '../screens/Pref2Screen'
import SuggestScreen from '../screens/SuggestScreen'
import QuestionsScreen from '../screens/QuestionsScreen'
import Test from '../screens/Test'
 

//export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //Main: MainTabNavigator,
//});

export default createStackNavigator({
	Test : { screen : Test },
	Main : { screen : MainScreen },
	GoalsScreen : { screen : GoalsScreen},
	QuestionsScreen : { screen : QuestionsScreen},
	Pref2Screen : { screen : Pref2Screen },
	MainScreen : { screen : MainScreen },
	BioScreen : { screen : BioScreen },
	UploadScreen : { screen : UploadScreen },
	SuggestScreen : { screen : SuggestScreen },
	Pref1Screen : { screen : Pref1Screen },
})