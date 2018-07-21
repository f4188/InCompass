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
  FlatList  
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class Pref2Screen extends React.Component {

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

        <Text style={styles.getStartedText}>Which foods do you not prefer?</Text>
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
        id: 17,
      },{
        name: "Pineapple",
        id: 13,
      },{
        name: "Banana",
        id: 14,
      },{
        name: "Watermelon",
        id: 15,
      },{
        name: "Kiwi fruit",
        id: 16,
      }]
  },
  {
    name: "Gems",
    id: 1,
    children: [{
        name: "Quartz",
        id: 20,
      },{
        name: "Zircon",
        id: 21,
      },{
        name: "Sapphire",
        id: 22,
      },{
        name: "Topaz",
        id: 23,
      }]
  },
  {
    name: "Plants",
    id: 2,
    children: [{
        name: "Mother In Law\'s Tongue",
        id: 30,
      },{
        name: "Yucca",
        id: 31,
      },{
        name: "Monsteria",
        id: 32,
      },{
        name: "Palm",
        id: 33,
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
});
