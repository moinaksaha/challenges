// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
// import loadable from '@loadable/component';

// const DonationPage = loadable(() => import('../../components/DonationPage'));
import DonationPage from '../../components/DonationPage';

injectGlobal`
  body {
    margin: 0;
  }
`
const MainWrapper = styled.div`
  max-width: 1280px;
  margin: 0px auto;
  font-family: 'Lato', sans-serif;
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


