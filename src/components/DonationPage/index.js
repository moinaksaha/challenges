// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
// import loadable from '@loadable/component';

import { fetchAllCharities } from '../../store/actions/charities';
import { fetchAllDonations } from '../../store/actions/donations';

import { summaryDonationMultiCurrency } from '../../utils/helpers';

import Card from '../Card';
import Header from '../Header';
import GenericLoader from '../GenericLoader';
import GenericError from '../GenericError';
import GenericNoData from '../GenericNoData';
// const Card = loadable(() => import('../Card'));
// const Header = loadable(() => import('../Header'));

const AllCharities = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  margin-top: 20px;
`;

export class DonationPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHeaderSticky: false,
    }
  }
  componentDidMount() {
    const { fetchAllCharities, fetchAllDonations } = this.props;
    fetchAllCharities();
    fetchAllDonations();
  }

  getCharityDonation = (charityID) => {
    const { allDonations } = this.props;
    if (allDonations && allDonations.data && allDonations.data.length !== 0) {
      return allDonations.data.filter((item) => item.charitiesId === charityID)
    }
    return [];
  }

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
      <div>
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
      </div>
    );
  }
};

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


