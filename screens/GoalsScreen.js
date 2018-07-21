import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class GoalsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      goals: {
          one: true,
          two: true,
          three: true,
          four: true
      }
    }
  }

  toggleState = (one) => {
    if(one === "one") {
      this.setState((prevState, props) => {
        return {goals: {one: !this.state.goals.one, two: this.state.goals.two, three: this.state.goals.three, four: this.state.goals.four}};
      });
    } else if(one === "two") {
      this.setState((prevState, props) => {
        return {goals: {one: this.state.goals.one, two: !this.state.goals.two, three: this.state.goals.three, four: this.state.goals.four}};
      });
    } else if(one === "three") {
      this.setState((prevState, props) => {
        return {goals: {one: this.state.goals.one, two: this.state.goals.two, three: !this.state.goals.three, four: this.state.goals.four}};
      });
    } else if(one === "four") {
        this.setState((prevState, props) => {
          return {goals: {one: this.state.goals.one, two: this.state.goals.two, three: this.state.goals.three, four: !this.state.goals.four}};
        });
    }
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

          <Text style={styles.headerText}>WHAT IS YOUR MAIN HEALTH GOAL?</Text>

          <View style={styles.getStartedContainer}>
            <View style={styles.iconColums}>
             <Text style={styles.getStartedText}>Weight Loss</Text>
              <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Pref1Screen')}}>
                <Image
                  source={
                    __DEV__
                      ? require('../assets/images/weight_loss.png')
                      : require('../assets/images/weight_loss.png')
                  }
                  style={styles.iconImage}
                />
              </TouchableHighlight> 
            </View>

             <View style={styles.iconColums}>
             <Text style={styles.getStartedText}>Athletic Training</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/athlete_training.png')
                  : require('../assets/images/athlete_training.png')
              }
              style={styles.iconImage}
            />
            </View>
            
          
          </View>

           <View style={styles.getStartedContainer}>

            <View style={styles.iconColums}>
             <Text style={styles.getStartedText}>Lean & Fit</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/lean_fit.png')
                  : require('../assets/images/lean_fit.png')
              }
              style={styles.iconImage}
            />
            </View>
            <View style={styles.iconColums}>
             <Text style={styles.getStartedText}>Longevity</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/longevity.png')
                  : require('../assets/images/longevity.png')
              }
              style={styles.iconImage}
            />
            </View>
          </View>

           <View style={styles.getStartedContainer}>
            <View style={styles.iconColums}>
             <Text style={styles.getStartedText}>Basic</Text>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/basic.png')
                  : require('../assets/images/basic.png')
              }
              style={styles.iconImage}
            />
            </View>
<<<<<<< HEAD

=======
            
>>>>>>> refs/remotes/origin/master
          </View>

        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  
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
    marginTop: 30,
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
  iconColums: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  getStartedContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    textAlign: 'center',
  },
  iconImage: {
    marginTop: -20,
    width: 150,
    height: 200,
    resizeMode: 'contain',
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
