// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { sumIndividualDonations } from '../../utils/helpers';

import ButtonPrimary from '../ButtonPrimary';
import PaymentMask from '../PaymentMask';

const CardImage = styled.div`
  min-height: 250px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const CardWrapper = styled.div`
  flex: 0 50%;
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

    // const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    //   <label key={j}>
    //     <input
    //       type="radio"
    //       name="payment"
    //     /> {amount}
    //   </label>
    // ));

    const previousDonationsSummary = sumIndividualDonations(donations);

    return (
      <CardWrapper>
        <Container>
          <PaymentMask 
            visible={showPaymentButton} 
            data={data}
            handleCloseButtonClick={this.hidePaymentScreen}
          />
          {/* {showPaymentButton && 
            <Mask>
              <ClosePaymentButton onClick={this.hidePaymentScreen}>X</ClosePaymentButton>
              <div>{`Select the amount to donate (${data.currency})`}</div>
              <PaymentOptionHolder>
                {payments}
              </PaymentOptionHolder>
              <div>
                <ButtonPrimary displayText={'Pay'} key={'charitypaybutton'} />
              </div>
            </Mask>
          } */}
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

