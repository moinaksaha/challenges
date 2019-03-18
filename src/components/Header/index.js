// @flow
import React from 'react';
import PropTypes from 'prop-types';

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

const Header = ({ totalDonation }) => {
  if (totalDonation) {
    let totalDonationBreakup = '';

    Object.keys(totalDonation).forEach(function(key,index) {
      totalDonationBreakup = (index > 0) ?
        `${totalDonationBreakup}, ${totalDonation[key]} ${key}`:
        `${totalDonation[key]} ${key}`
    });

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
  return null;
};

Header.propTypes = {
  totalDonation: PropTypes.object,
};

Header.defaultProps = {
  totalDonation: {},
};

export default Header;


