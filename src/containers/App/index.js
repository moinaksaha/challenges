// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

const MainWrapper = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  font-family: 'Lato', sans-serif;
`

import DonationPage from '../../components/DonationPage'

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


