import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Picker,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class BioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    this.state = {
      activity: "Sedentary"
    }
  }

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.form}>
      <View>
        <Text>
          Height
        </Text>

      </View>

      <View>
       <Text>
        Activity
       </Text>
       
       <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({activity: itemValue})}>
        <Picker.Item label="Sedentary" value="Sedentary" />
        <Picker.Item label="Normal" value="Normal" />
        <Picker.Item label="Active" value="Active" />
        <Picker.Item label="Olympiam" value="Olympian" />
      </Picker>
      </View>

       <View>
       <Text>
        Biological Sex
       </Text>
       
       <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({activity: itemValue})}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      </View>

      </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:24
  },
  form : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
