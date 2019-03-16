// @flow
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchAllCharities } from '../../store/actions/charities';
import { fetchAllDonations } from '../../store/actions/donations';

import Card from '../Card';


const AllCharities = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PageHeading = styled.div`
  text-align: center;
  font-size: 30px;
  color: #5c606f;
  padding: 40px 0;
`;


export class Donationpage extends Component {
  componentDidMount = () => {
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
    const { allCharities } = this.props;

    if (allCharities.loading) {
      return <div>loading data</div>;
    }

    if (allCharities.error) {
      return <div>Error while loading</div>
    }
    if (!allCharities || !allCharities.data || allCharities.data.length === 0) {
      return <div>No data to show</div>
    }
    return (
      <div>
        <PageHeading>
          Omise Tamboon React
        </PageHeading>
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

// export default Donationpage

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


