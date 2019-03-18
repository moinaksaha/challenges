// @flow
import React from 'react';
import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';

const MessageWrapper = styled.div`
    color: ${props => props.theme.main};
`;

MessageWrapper.defaultProps = {
  theme: {
    main: 'blue',
  },
};

const getMessageTheme = (type) => {
  switch (type) {
    case 'error':
      return {
        main: '#ff4646',
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
    case 'primary':
      return {
        main: 'blue',
      }
    default:
      return {
        main: 'blue',
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

GenericMessage.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
};

GenericMessage.defaultProps = {
  type: 'primary',
  message: 'Some Message',
};

export default GenericMessage


