import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Button } from 'react-native';

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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

            <Text style={styles.getStartedText}>WELCOME.</Text>


          </View>



          <View style={styles.helpContainer}>
          
              <Text style={styles.bodyText}>Are you ready for a personalized path to wellness?</Text>
          
          </View>

          <View style={styles.arrowContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/arrow_squished.png')
                  : require('../assets/images/arrow_squished.png')
              }
              style={styles.arrowImage}
            />
          </View>

          <View style={styles.textContainer}>
            <Button
               onPress={()=>{this.props.navigation.navigate('BioScreen')}}
                title="Let's Get Started"
                color="#555"
                paddingTop="50"
                fontSize="20"
                accessibilityLabel="Learn more about this purple button"
            />
          </View>  
        </ScrollView>

      </View>
    );
  }

}

const buildProfile = ()=> {
  //this.props
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  textContainer: {
    paddingTop: 50,
  },

  contentContainer: {
    paddingTop: 30,
  },

  welcomeContainer: {
    alignItems: 'center',
    marginTop: 5,

  },
  welcomeImage: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: -10,
  },
  arrowContainer: {
    marginTop: -100,
    alignItems: 'center',
  },
  arrowImage: {
    marginTop: 0,
    width: 120,
    height: 150,
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 17,
    color: '#fff',
  },
  getStartedContainer: {
    backgroundColor: '#267587',
    alignItems: 'center',

  },
  getStartedText: {
    fontSize: 50,
    color: '#fff',
    lineHeight: 50,
    textAlign: 'center',
    marginTop: 5,
    paddingTop: 40,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    backgroundColor: '#267587',
    marginTop: 0,
    alignItems: 'center',
    paddingVertical: 50,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 16,
    color: '#fff',
  },
});
