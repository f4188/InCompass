import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { DocumentPicker } from 'expo';
import { MonoText } from '../components/StyledText';

export default class QuestionsScreen extends React.Component {
    constructor(props){
    super(props)
    this.state = {
      wearable : false,
      fitnessApp : false
    }
  }


  _openPicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      this.setState({ document: result });
    } else {
      
    }
  };

  _renderDocument() {
    if (this.state.document === null) {
      return null;
    }
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View contentContainerStyle={styles.contentContainerCenter}>
          <Image
              source={
                __DEV__
                  ? require('../assets/images/compass.png')
                  : require('../assets/images/compass.png')
              }
              style={styles.welcomeImage}
          />
          </View>
          <Text style={styles.headerText}>FITNESS DEVICES</Text>

          <View style={styles.getStartedContainer}>
            <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.silverText}>Get Started with Silverberry</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.switchQuestions}>
            <Text style={styles.getStartedText}> Do you own any wearable? </Text>
            <Switch style={styles.switch}  onTintColor="green" value={this.state.wearable} onValueChange={()=> {this.state.wearable = true}}> </Switch>
            { this.state.wearable ? ( <Button title="connect fitbit" />) : null }
          </View>

          <View style={styles.switchQuestions}>
            <Text style={styles.getStartedText}> Do you use a fitness app? </Text>
            <Switch style={styles.switch}  onTintColor="green" value={this.state.fitnessApp} onValueChange={()=> {this.state.fitnessApp = true}}> </Switch>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
            </TouchableOpacity>
          </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={this._openPicker} title="Open document picker" />
        {this._renderDocument()}
      </View>

          <Button title="Next" onPress={()=>{this.props.navigation.navigate('ReportScreen')}}/>
        </ScrollView>
      </View>
    );
  }

}



const styles = StyleSheet.create({
  switch: {
    marginBottom: 30
  },
  buttonStyle: {
     alignSelf: 'flex-end'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 10,
  },
  silverText: {
    marginBottom: 40,
    fontSize: 17,
    color: '#db0068',
  },
  switchQuestions: {
    marginLeft: 50,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 20,
  },
  getStartedContainer: {
    marginHorizontal: 50,
  },
  getStartedText: {
    paddingBottom: 30,
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    alignSelf: 'flex-start'
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
