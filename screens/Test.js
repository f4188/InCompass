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