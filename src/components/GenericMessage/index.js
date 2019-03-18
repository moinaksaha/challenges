// @flow

// Necessary Imports
import React from 'react';
import PropTypes from 'prop-types';

// Styled components 
// Reference - https://github.com/styled-components/styled-components
import styled, { ThemeProvider } from 'styled-components';

// Styled Components
const MessageWrapper = styled.div`
    color: ${props => props.theme.main};
`;

MessageWrapper.defaultProps = {
  theme: {
    main: 'blue',
  },
};

// Dynamically deciding the theme based on props
const getMessageTheme = (type) => {
  switch (type) {
    case 'error':
      return {
        main: '#ff4646',
      }
    case 'success':
      return {
        main: '#429845',
      }
    case 'warning':
      return {
        main: '#FF9800',
      }
    case 'inProgress':
      return {
        main: '#648cf3',
      }
    default:
      return {
        main: '#429845',
      }
  }
};

const GenericMessage = ({ type, message }) => (
  <ThemeProvider theme={getMessageTheme(type)}>
    <MessageWrapper>
      {message}
    </MessageWrapper>
  </ThemeProvider>
);

// Proptype Validations
GenericMessage.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
};

// Default Props
GenericMessage.defaultProps = {
  type: 'success',
  message: 'Some Message',
};

export default GenericMessage


