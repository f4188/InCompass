import React, { Component } from 'react';
import styled from 'styled-components/native';
import { TextInput, Text, StyleSheet, View, Button } from 'react-native'

import CustomButton from '../components/Button';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: ${'#000000'};
`;

const ButtonContainer = styled.View`
  top: 100;
`
class WelcomeScreen extends Component {

	render() {
    return (
      <ContainerView>
				<TitleText>
          Welcome
			  </TitleText>
        <ButtonContainer>
          <CustomButton text="OK" onPress={() => this.props.navigation.navigate('Home')} />
        </ButtonContainer>
      </ContainerView>
    );
  }
}


const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8 
  },
})

export default WelcomeScreen
