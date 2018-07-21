import React from 'react';
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

export default class ReportScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    this.state = {
      list : [{key : 'Low Fat Diet Affectiveness'}, { key : 'Low Carb Diet Affectiveness' } , { key : 'Low Protein Intake Risk' } , { key : 'Mediterranean Diet Affectiveness' } ]
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/compass.png')
                  : require('../assets/images/compass.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.headerText}>REPORT SUGGESTIONS</Text>}
          </View>

          <Text style={styles.getStartedText}> Based on your genetic profile these genetic markers are most relevant to you goals </Text>
         
          <View style={styles.itemList}>
            <FlatList
              data={this.state.list}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>GET RECIPE SUGGESTIONS</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent : 'space-around'
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 20,
  },
  headerText : {
    fontSize : 25,
    color: '#fff',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    paddingVertical: 10

  },
  getStartedContainer: {
    backgroundColor: "#267587",
    alignItems: 'center',
    marginHorizontal: 0,
  },
  getStartedText: {
    fontSize: 18,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 50,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    marginTop: 30,
    fontSize: 16,
    color: '#db0068'
  },
  itemList : {
    marginTop: 30,
  },
  item: {
    lineHeight: 20,
    paddingLeft: 60,
    padding: 10,
    color: 'rgba(96,100,109, 1)',
    fontSize: 15,
    height: 44
  }
});
