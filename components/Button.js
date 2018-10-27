import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableHighlight`
  width: 130;
  height: 40;
  backgroundColor: ${'#2342e3'};
  borderRadius: 5;
  justifyContent: center;
  alignItems: center;
`;

const Text = styled.Text`
  fontSize: 20;
  color: ${'#ffffff'};
`;

class CustomButton extends Component {
  render() {
    const { text, onPress } = this.props;

    return (
      <ButtonContainer
        underlayColor={'#433233'}
        onPress={onPress}
      >
        <Text>{text}</Text>
      </ButtonContainer>
    );
  }
}

export default CustomButton //withTheme(Button);
