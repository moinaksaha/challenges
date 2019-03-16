// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import ButtonPrimary from '../ButtonPrimary';
import GenericMessage from '../GenericMessage';

// import styles from './index.module.css'

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.96);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & >div{
    padding: 5px;
  }
`;

const PaymentOptionHolder = styled.div`
  display: flex;

  & >label{
    display: flex;
    padding: 5px;
  }
`;

const ClosePaymentButton = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

class Paymentmask extends Component {

    handleCloseButton = () => {
      const { handleCloseButtonClick } = this.props;
      handleCloseButtonClick();
    }

    render() {
      const { data, visible } = this.props;

      if (!visible) {
        return null;
      }

      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
        <label key={j}>
          <input
            type="radio"
            name="payment"
          /> {amount}
        </label>
      ));

      return (
        <Mask>

          <GenericMessage message={'moinak, cool!!'} type={'success'}/>
          {/* <ClosePaymentButton onClick={this.handleCloseButton}>X</ClosePaymentButton>
          <div>{`Select the amount to donate (${data.currency})`}</div>
          <PaymentOptionHolder>
            {payments}
          </PaymentOptionHolder>
          <div>
            <ButtonPrimary displayText={'Pay'} />
          </div> */}
        </Mask>
      );
    }
};

export default Paymentmask


