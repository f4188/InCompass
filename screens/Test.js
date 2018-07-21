import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';


export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container} >

        <Button title="Main" onPress={()=>{this.props.navigation.navigate('MainScreen')}} />
        <Button title="Bio" onPress={()=>{this.props.navigation.navigate('BioScreen')}} />
        <Button title="GoalsScreen" onPress={()=>{this.props.navigation.navigate('GoalsScreen')}} />
        <Button title="QuestionsScreen" onPress={()=>{this.props.navigation.navigate('QuestionsScreen')}} />
        <Button title="Pref2Screen" onPress={()=>{this.props.navigation.navigate('Pref2Screen')}} />

        <Button title="UploadScreen" onPress={()=>{this.props.navigation.navigate('UploadScreen')}} />

        <Button title="SuggestScreen" onPress={()=>{this.props.navigation.navigate('SuggestScreen')}} />
        <Button title="Pref1Screen" onPress={()=>{this.props.navigation.navigate('Pref1Screen')}} />

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : 24
  }
})
