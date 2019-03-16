// @flow
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import styles from './index.module.css'

const MessageWrapper = styled.div`
    color: ${props => props.theme.main};
`;

MessageWrapper.defaultProps = {
  theme: {
    main: 'blue',
  },
}

class GenericMessage extends Component {

    getMessageTheme = (type) => {
      switch (type) {
        case 'error':
          return {
            main: 'palevioletred',
          }
        case 'success':
          return {
            main: 'green',
          }
        case 'warning':
          return {
            main: 'orange',
          }
        case 'inProgress':
          return {
            main: '#00aeff',
          }
        default:
          return {
            main: 'blue',
          }
      }
    }
    render() {
      const { type, message } = this.props;
      
      return (
        <ThemeProvider theme={this.getMessageTheme(type)}>
          <MessageWrapper>
            {message}
          </MessageWrapper>
        </ThemeProvider>
      );
    }
};

export default GenericMessage


