// @flow
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Sticky from 'react-stickynode';

import { fetchAllCharities } from '../../store/actions/charities';
import { fetchAllDonations } from '../../store/actions/donations';

import { summaryDonationMultiCurrency } from '../../utils/helpers';

import Card from '../Card';
import Header from '../Header'


const AllCharities = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  margin-top: 20px;
`;

export class Donationpage extends Component {
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

  render() {
    const { allCharities, allDonations } = this.props;

    if (allCharities.loading) {
      return <div>loading data</div>;
    }

    if (allCharities.error) {
      return <div>Error while loading</div>
    }
    if (!allCharities || !allCharities.data || allCharities.data.length === 0) {
      return <div>No data to show</div>
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
        <Sticky enabled={true} top={0} innerZ={9}>
          <Header totalDonation={totalDonation}/>
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
  )(Donationpage)
);


