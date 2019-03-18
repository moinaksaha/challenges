// @flow

// Necessary Imports
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Styled components Imports
// Reference - https://github.com/styled-components/styled-components
import styled, { injectGlobal }  from 'styled-components';

import DonationPage from '../../components/DonationPage';
// import loadable from '@loadable/component';
// const DonationPage = loadable(() => import('../../components/DonationPage'));

injectGlobal`
  body {
    margin: 0;
  }
`
// Styled Components
const MainWrapper = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  font-family: 'Lato', sans-serif;
  min-height: 100vh;
  display: flex;
  background: #ffffff;
`
export class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Router>
          <Route exact path="/" component={DonationPage} />
        </Router>
      </MainWrapper>
    );
  }
};

export default App;


