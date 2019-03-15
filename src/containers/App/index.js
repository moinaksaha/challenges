// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DonationPage from '../../components/DonationPage'

export class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={DonationPage} />
      </Router>
    );
  }
};

export default App;


