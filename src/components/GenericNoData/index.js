// @flow
import React from 'react'
import styled from 'styled-components';

const NoDataDiv = styled.div`
    display flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #5c606f;

    & >h3{
        color: #FF9800;
    }
    
    & >p{
        margin: 0;
    }
`;

const GenericNoData = () => (
  <NoDataDiv>
    <h3>Scary story!</h3>
    <p>No data found to display</p>
  </NoDataDiv>
);

export default GenericNoData


