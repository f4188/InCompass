import React from 'react';
import { Platform, AsyncStorage } from 'react-native';
import {
  createTabNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import MainScreen from '../screens/MainScreen'
import UploadScreen from '../screens/UploadScreen'
import Pref1Screen from '../screens/Pref1Screen'
import Pref2Screen from '../screens/Pref2Screen'
import ReportScreen from '../screens/ReportScreen'
import SuggestScreen from '../screens/SuggestScreen'
import WelcomeScreen from '../screens/Welcome'

//import DrawerItems from './DrawerItems';

import { HamburgerIcon, SettingsIcon, BackIcon } from '../components/icons';
import CustomDrawerContent from '../components';
import { colors } from '../utils/constants';

/*

	SuggestScreen : { screen : SuggestScreen },
	Pref1Screen : { screen : Pref1Screen },
	Pref2Screen : { screen : Pref2Screen },

	ReportScreen : { screen : ReportScreen },
	UploadScreen : { screen : UploadScreen },

	TabNavigator -|- AppDrawer -|- AppMainStack -|- Home: 	 AppMainTab
				 				         	     |- Settings: Settings

*/

const AppMainTab = createBottomTabNavigator({
  Home: {
    screen: SuggestScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Search Results',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Pick a Companion',
      headerTitleStyle: {
        color: colors.PINK_300,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Favorites: {
    screen: Pref1Screen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Include',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Include',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Favorites',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
    })
  },
  Profile: {
    screen: Pref2Screen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Exclude',
      drawerIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      tabBarLabel: 'Exclude',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user-circle" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Profile',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
      headerRight: <SettingsIcon onPress={() => navigation.navigate('Settings')} />,
    })
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.PINK_50,
    inactiveBackgroundColor: colors.PINK_100,
    activeBackgroundColor: colors.PINK_100,
    showIcon: true,
    showLabel: Platform.OS === 'ios',
    indicatorStyle: {
    backgroundColor: colors.PINK_300,
    },
    style: {
   		backgroundColor: colors.PINK_100,
    },
    upperCaseLabel: false,
  },
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: false,
});

const AppMainStack = createStackNavigator({
  Home: { screen: AppMainTab },
  Settings: { screen: ReportScreen },
}, {
  cardStyle: {
    backgroundColor: colors.PINK_50,
  },
  mode: 'modal',
});

const AppDrawer = createDrawerNavigator({
  Home: {
    screen: AppMainStack,
  },
  Settings: {
    screen: ReportScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-settings" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.PINK_100,
      },
      headerTitle: 'Settings',
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
		}),
  },
}, {
  contentComponent: props => (<CustomDrawerContent {...props}/>),
  contentOptions: {
    activeBackgroundColor: colors.PINK_100,
    activeTintColor: colors.WHITE,
	inactiveTintColor: colors.PINK_200,
  },
});

const AppNavigator = createTabNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: AppDrawer },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default AppNavigator;
