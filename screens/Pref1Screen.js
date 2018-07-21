import React from 'react';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Button  
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Pref1Screen extends React.Component {

  constructor(){
    super()
    this.state = {
      selectedItems: [],
    }
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View contentContainerStyle={styles.contentContainerCenter}>
          <Image
              source={
                __DEV__
                  ? require('../assets/images/compass.png')
                  : require('../assets/images/compass.png')
              }
              style={styles.welcomeImage}
          />

        <Text style={styles.foodPrefText}>WHICH FOODS DO YOU PREFER?</Text>
        </View>
        <View style={styles.paddingTop} contentContainerStyle={styles.contentContainer}>
        <SectionedMultiSelect
          items={items} 
          color="primary"
          uniqueKey='id'
          subKey='children'
          selectText='Click to select..'
          showDropDowns={true}
          readOnlyHeadings={true}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
        />
      </View>

        <Button title="Submit" onPress={()=>{this.props.navigation.navigate('Pref2Screen')}}/>
        </ScrollView>

      </View>
    );
  }

}



const items = [
  {  
    name: "Fruits",
    id: 0,
    children: [{
        name: "Apple",
        id: 10,
      },{
        name: "Strawberry",
        id: 11,
      },{
        name: "Pineapple",
        id: 12,
      },{
        name: "Banana",
        id: 13,
      },{
        name: "Watermelon",
        id: 14,
      },{
        name: "Kiwi fruit",
        id: 15,
      },{
        name: "Tomato",
        id: 16,
      }]
  },
  {
    name: "Proteins",
    id: 1,
    children: [{
        name: "Chicken",
        id: 20,
      },{
        name: "Fish",
        id: 21,
      },{
        name: "Beef",
        id: 22,
      },{
        name: "Pork",
        id: 23,
      },{
        name: "Tofu",
        id: 24,
      }]
  },
  {
    name: "Vegetables",
    id: 2,
    children: [{
        name: "Spinach",
        id: 30,
      },{
        name: "Onion",
        id: 31,
      },{
        name: "Kale",
        id: 32,
      },{
        name: "Broccoli",
        id: 33,
      },{
        name: "Beets",
        id: 34,
      },{
        name: "Carrots",
        id: 35,
      }]
  },
]

const styles = StyleSheet.create({
  paddingTop: {
    paddingTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  contentContainerCenter: {
    alignItems: 'center',
  },

  contentContainer: {
    marginTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  foodPrefText : {
    fontSize : 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 30,
  },
});
