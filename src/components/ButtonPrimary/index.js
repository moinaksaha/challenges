// @flow
import React, { Component } from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  padding: 5px 10px;
  border: 2px solid #648cf3;
  color: #648cf3;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
      background: #648cf3;
      color: #ffffff;
  }
`;

class ButtonPrimary extends Component {
  render() {
    return (
      <ButtonWrapper>
        {this.props.displayText}
      </ButtonWrapper>
    );
  }
};

export default ButtonPrimary


