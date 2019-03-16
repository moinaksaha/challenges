// @flow
import React, { Component } from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 40px 0 10px 0;
  background: #ffffff;
`;

const PageHeading = styled.div`
  text-align: center;
  font-size: 30px;
  color: #5c606f;
`;

const TotalDonation = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #648cf3;
`;

class Header extends Component {
  render() {
    const { totalDonation } = this.props;
    let totalDonationBreakup = '';
    if (totalDonation) {
      Object.keys(totalDonation).forEach(function(key,index) {
        totalDonationBreakup = (index > 0) ?
          `${totalDonationBreakup}, ${totalDonation[key]} ${key}`:
          `${totalDonation[key]} ${key}`
      });
    }
    return (
      <HeaderWrapper>
        <PageHeading>
          Omise Tamboon React
        </PageHeading>
        {totalDonation &&
          <TotalDonation>
            {`Total Donation Collected: ${totalDonationBreakup}`}
          </TotalDonation>
        }
      </HeaderWrapper>
      
    );
  }
};

export default Header


