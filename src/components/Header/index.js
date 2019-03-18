// @flow
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 40px 0 10px 0;
  background: #ffffff;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column !important;

    ${({ stuck }) => stuck && `
      padding: 10px;
    `}

  }

  ${({ stuck }) => stuck && `
    flex-direction: row;
    background: #648cf3;
    padding: 15px;
    justify-content: space-between;
  `}

  
`;

const PageHeading = styled.div`
  font-size: 30px;
  color: #5c606f;

  ${({ stuck }) => stuck && `
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
  `}
`;

const TotalDonation = styled.div`
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  color: #648cf3;

  @media (max-width: 500px) {
    padding: 5px;
    font-size: 12px;
  }

  ${({ stuck }) => stuck && `
    padding: 0;
    color: #ffffff;
  `}
`;

const Header = ({ totalDonation, isStuck }) => {
  if (totalDonation) {
    let totalDonationBreakup = '';

    Object.keys(totalDonation).forEach(function(key,index) {
      totalDonationBreakup = (index > 0) ?
        `${totalDonationBreakup}, ${totalDonation[key]} ${key}`:
        `${totalDonation[key]} ${key}`
    });

    return (
      <HeaderWrapper stuck={isStuck}>
        <PageHeading stuck={isStuck}>
            Omise Tamboon React
        </PageHeading>
        {totalDonation &&
          <TotalDonation stuck={isStuck}>
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


