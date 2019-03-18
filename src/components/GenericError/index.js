// @flow
import React from 'react'
import styled from 'styled-components';

const ErrorDiv = styled.div`
    display flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #5c606f;

    & >h3{
        color: #ff4646;
    }
    
    & >p{
        margin: 0;
    }
`;

const GenericError = () => (
  <ErrorDiv>
    <h3>Oops!</h3>
    <p>Something went wrong, Please try again later</p>
  </ErrorDiv>
);

export default GenericError


