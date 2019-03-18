// Necessary Imports
import React from 'react'
import PropTypes from 'prop-types';

// Styled components Imports
// Reference - https://github.com/styled-components/styled-components
import styled from 'styled-components';

// Styled Components
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

const ButtonPrimary = ({ displayText }) => (
  <ButtonWrapper>
    {displayText}
  </ButtonWrapper>
)

// Proptype Validations
ButtonPrimary.propTypes = {
  displayText: PropTypes.string,
};

// Default Props
ButtonPrimary.defaultProps = {
  displayText: 'Button',
};

export default ButtonPrimary;


