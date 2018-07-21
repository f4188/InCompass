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
  TextInput,
  Button
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
      height: "",
      age: "",
      sex: "",
      weight: ""
    }
  }

  render() {

    const { activity } = this.state

    return (
      <View style={styles.container}>
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

      <Text style={styles.instruct}>
        BIOGRAPHICAL INFO
      </Text>

      <View style={styles.form}>


      <View style={styles.formField, styles.formFieldRow}>
        <Text style={styles.formFieldText}>Height:
        </Text>
        <TextInput
          style={styles.formFieldTextInput}
          placeholder="Enter height"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>

      <View style={styles.formField, styles.formFieldRow}>
        <Text style={styles.formFieldText}>Age:
        </Text>
        <TextInput
          style={styles.formFieldTextInput}
          placeholder="Enter age here"
          onChangeText={(age) => this.setState({age})}
          value={this.state.text}
        />
      </View>

      <View style={styles.formField, styles.formFieldRow}>
        <Text style={styles.formFieldText}>
          Current weight:
        </Text>
        <TextInput
          style={styles.formFieldTextInput}
          placeholder="Enter weight"
          onChangeText={(weight) => this.setState({weight})}
          value={this.state.weight}
        />
      </View>


      <View style={styles.pickerColumns}>
       <Text style={styles.pickerFieldText}>Activity Level:</Text>       
       <Picker

        selectedValue={this.state.activity}
        style={{ height: 50, width: 100, }}
        onValueChange={(itemValue, itemIndex) => this.setState({activity: itemValue})}>
        <Picker.Item label="Sedentary" value="Sedentary" />
        <Picker.Item label="Normal" value="Normal" />
        <Picker.Item label="Active" value="Active" />
        <Picker.Item label="Olympian" value="Olympian" />
      </Picker>
      </View>

       <View style={styles.pickerColumns}>
       <Text style={styles.pickerFieldText}>
        Biological Sex:
       </Text>
       
       <Picker
        selectedValue={this.state.sex}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      </View>


      <Button title="Submit" onPress={()=>{}}/>

      </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
   welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:24,
  },
  instruct : {
    fontSize : 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 50,
    marginTop: 30,
  },
  pickerColumns : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form : {
    marginLeft: 50,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: 300,
  },
  formFieldRow : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 12,
  },
  formField : {
    padding : 15,
  },
  formFieldText : {
    fontSize : 17,
    marginRight : 30,
    marginLeft : 20,
  },
  formFieldTextInput : {
    color: "#267587",
    fontSize: 14,
    height: 40, 
    borderBottomWidth : 1,
    borderBottomColor: 'rgba(38, 117, 135, .3)',
    width: 120,
    padding: 5,
  },
});
