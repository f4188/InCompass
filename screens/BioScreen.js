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
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { TextField } from 'react-native-material-textfield'


export default class BioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    this.state = {
      activity: "Sedentary",
      text: "",
      age: "",
      sex: ""
    }
  }

  render() {

    const { activity } = this.state

    return (
      <View style={styles.container}>

      <View style={styles.form}>
      <TextField
        label='Something'
        value={activity}
        onChangeText={ ()=>{} }
      />

      <View style={styles.formField, styles.formFieldRow}>
        <Text>
          Height
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="Enter height here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>

      <View style={styles.formField, styles.formFieldRow}>
        <Text>
          Age
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(age) => this.setState({age})}
          value={this.state.text}
        />
      </View>

      <View style={styles.formField}>
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
        <Picker.Item label="Olympian" value="Olympian" />
      </Picker>
      </View>

       <View style={styles.formField}>
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
  formFieldRow : {
    flexDirection : 'row',
  },
  formField : {
    padding : 15
  }
});
