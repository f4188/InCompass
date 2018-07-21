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

      <View style={styles.form}>
      
      <Text style={styles.instruct}>
        Input biographic info
      </Text>

      <View style={styles.formField, styles.formFieldRow}>
        <Text style={styles.formFieldText}>
          Height
        </Text>
        <TextInput
          style={styles.formFieldTextInput}
          placeholder="Enter height here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>

      <View style={styles.formField, styles.formFieldRow}>
        <Text style={styles.formFieldText}>
          Age
        </Text>
        <TextInput
          style={styles.formFieldTextInput}
          placeholder="Enter age here"
          onChangeText={(age) => this.setState({age})}
          value={this.state.text}
        />
      </View>

      <View style={styles.formField}>
       <Text style={styles.formFieldText}>
        Activity
       </Text>
       
       <Picker
        selectedValue={this.state.activity}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({activity: itemValue})}>
        <Picker.Item label="Sedentary" value="Sedentary" />
        <Picker.Item label="Normal" value="Normal" />
        <Picker.Item label="Active" value="Active" />
        <Picker.Item label="Olympian" value="Olympian" />
      </Picker>
      </View>

       <View style={styles.formField}>
       <Text style={styles.formFieldText}>
        Biological Sex
       </Text>
       
       <Picker
        selectedValue={this.state.sex}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => this.setState({sex: itemValue})}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
      </View>

      <View style={styles.formField, styles.formFieldRow}>
        <Text style={styles.formFieldText}>
          Current weight
        </Text>
        <TextInput
          style={styles.formFieldTextInput}
          onChangeText={(weight) => this.setState({weight})}
          value={this.state.weight}
        />
      </View>

      <Button title="Submit" onPress={()=>{}}/>

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
  instruct : {
    fontSize : 16
  },
  form : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  formFieldRow : {
    flexDirection : 'row',
    alignItems : 'center',
    padding : 10
  },
  formField : {
    padding : 15
  },
  formFieldText : {
    fontSize : 15,
    marginRight : 10
  },
  formFieldTextInput : {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 0,
    width: 60
  },
  picker : { 
    height: 50, 
    width: 100 
  }
});
