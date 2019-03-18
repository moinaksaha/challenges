// Necessary Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Styled components 
// Reference - https://github.com/styled-components/styled-components
import styled, { createGlobalStyle } from 'styled-components';

// React stickynode
// Reference - https://github.com/yahoo/react-stickynode
import Sticky from 'react-stickynode';

// ActionCreators imports
import { fetchAllCharities } from '../../store/actions/charities';
import { fetchAllDonations } from '../../store/actions/donations';

// Helper functions 
import { summaryDonationMultiCurrency } from '../../utils/helpers';

// Importing other components
import Card from '../Card';
import Header from '../Header';
import GenericLoader from '../GenericLoader';
import GenericError from '../GenericError';
import GenericNoData from '../GenericNoData';
// import loadable from '@loadable/component';
// const Card = loadable(() => import('../Card'));
// const Header = loadable(() => import('../Header'));

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
// Styled Components
const AllCharities = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  max-width: 1280px;
  margin: 0px auto;
`;

export class DonationPage extends Component {

  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      isHeaderSticky: false,
    }
  }

  // Component did mount function - for when component mounts
  componentDidMount() {
    const { fetchAllCharities, fetchAllDonations } = this.props;
    fetchAllCharities();
    fetchAllDonations();
  }

  // Filters all the donation objects for this particular charity with same charitiesId
  getCharityDonation = (charityID) => {
    const { allDonations } = this.props;
    if (allDonations && allDonations.data && allDonations.data.length !== 0) {
      return allDonations.data.filter((item) => item.charitiesId === charityID)
    }
    return [];
  }

  // Function that changes state according to the sticky component behaviour
  handleStateChange = ({status}) => {
    this.setState({
      isHeaderSticky: (status === 2) ? true : false,
    })
  }

  render() {
    const { allCharities, allDonations } = this.props;
    const { isHeaderSticky } = this.state;

    if (allCharities.loading) {
      return <GenericLoader />;
    }

    if (allCharities.error) {
      return <GenericError />;
    }
    if (!allCharities || !allCharities.data || allCharities.data.length === 0) {
      return <GenericNoData />
    }

    // Only works if all donations are made in the same currency
    // Improved that logic

    // const totalDonation = (allDonations && allDonations.data && allDonations.data.length !== 0) ?
    //   summaryDonations(allDonations.data.map((item) => (item.amount))):
    //   null;

    const totalDonation = (allDonations && allDonations.data && allDonations.data.length !== 0) ?
      summaryDonationMultiCurrency(allDonations.data):
      null;

    return (
      <React.Fragment>
        <GlobalStyle />
        <Sticky enabled={true} top={0} innerZ={9} activeClass={'moinak'} onStateChange={this.handleStateChange}>
          <Header totalDonation={totalDonation} isStuck={isHeaderSticky}/>
        </Sticky>

        <AllCharities>
          {allCharities.data.map((item) => {
            return (
              <Card 
                key={item.id}
                data={item}
                donations={this.getCharityDonation(item.id)}
              />
            )
          })}
        </AllCharities>
      </React.Fragment>
    );
  }
};

// Proptype Validations
DonationPage.propTypes = {
  fetchAllCharities: PropTypes.func,
  fetchAllDonations: PropTypes.func,
  allCharities: PropTypes.object,
  allDonations: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    allCharities: state.charities.charities,
    allDonations: state.donations.donations,
  };
};
    
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllCharities,
      fetchAllDonations,
    },
    dispatch
  );
    
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DonationPage)
);


