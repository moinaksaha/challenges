// Necessary Imports
import React from 'react'

// Styled components Imports
// Reference - https://github.com/styled-components/styled-components
import styled from 'styled-components';

// Import image asset
import loaderImage from '../../images/loader.gif';

// Styled Components
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


