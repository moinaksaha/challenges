// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

import { sumIndividualDonations } from '../../utils/helpers';

import ButtonPrimary from '../ButtonPrimary';

const PaymentMask = loadable(() => import('../PaymentMask'));

const CardImage = styled.div`
  min-height: 250px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const CardWrapper = styled.div`
  flex: 0 50%;

  @media (max-width: 767px) {
    flex: 0 100%;
  }
`;

const Container = styled.div`
  position: relative;
  margin: 20px;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,.3);
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  transition: 0.5s;

  :hover{
    box-shadow: 0 1px 30px 0 rgba(0,0,0,.5);
  }
`;

const TitleBar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CharityName = styled.div`
  color: #5c606f;
  font-weight: 500;
`;

const PreviousDonationBreakdown = styled.div`
  font-size: 10px;
  padding: 5px 0;
  color: #aaa;
`;

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPaymentButton: false,
    }
  }

  showPaymentScreen = () => {
    this.setState({
      showPaymentButton: true,
    })
  }

  hidePaymentScreen = () => {
    this.setState({
      showPaymentButton: false,
    })
  }

  render() {
    const { data, donations } = this.props;
    const { showPaymentButton } = this.state;
    const previousDonationsSummary = sumIndividualDonations(donations);

    return (
      <CardWrapper>
        <Container>
          <PaymentMask 
            visible={showPaymentButton} 
            data={data}
            handleCloseButtonClick={this.hidePaymentScreen}
          />
          <CardImage img={`../images/${data.image}`}></CardImage>
          <TitleBar>
            <div>
              <CharityName>{`${data.name}`}</CharityName>
              {previousDonationsSummary && 
                <PreviousDonationBreakdown>
                  {`${data.currency} ${previousDonationsSummary.amount}  (${previousDonationsSummary.breakdown})`} 
                </PreviousDonationBreakdown>
              }
            </div>
            <div onClick={this.showPaymentScreen}>
              <ButtonPrimary displayText={'Donate'} key={'donatebutton'}/>
            </div>
          </TitleBar>
        </Container>
      </CardWrapper>
    );
  }
};

export default Card

