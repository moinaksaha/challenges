// @flow
import React from 'react'
import styled from 'styled-components';

import loaderImage from '../../images/loader.gif';

const LoaderDiv = styled.div`
    display flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: #5c606f;

    & >img{
        padding: 10px;
    }
    
    & >p{
        margin: 0;
    }
`;

const GenericLoader = () => (
  <LoaderDiv>
    <img src={loaderImage} width={30} height={30} />
    <p>Loading, please wait ...</p>
  </LoaderDiv>
);

export default GenericLoader


