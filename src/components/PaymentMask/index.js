// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import ButtonPrimary from '../ButtonPrimary';
import GenericMessage from '../GenericMessage';

import { makePayment, clearPaymentInProgressData } from '../../store/actions/donations';

import loaderImage from '../../images/loader.gif';

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

const PaymentInProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  color: #00aeff;
`;

class PaymentMask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAmount: null,
      paymentInProgress: false,
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.paymentStatus.loading === true && this.props.paymentStatus.loading === false) {
      setTimeout(() => {
        this.clearPaymentData();
      }, 2000);
    }
  }

  clearPaymentData = () => {
    this.handleCloseButton();
    const { clearPaymentInProgressData } = this.props;
    clearPaymentInProgressData();
    this.resetPaymentForm();
  }

  resetPaymentForm = () => {
    this.setState({
      selectedAmount: null,
      paymentInProgress: false,
    })
  }

    handleCloseButton = () => {
      this.resetPaymentForm();
      const { handleCloseButtonClick } = this.props;
      handleCloseButtonClick();
    }

    initiatePayment = () => {
      const { makePayment, data } = this.props;
      const { selectedAmount } = this.state;
      const uuidv1 = require('uuid/v1');
      // debugger
      if (selectedAmount) {
        this.setState({
          paymentInProgress: true,
        })
        makePayment({
          charitiesId: data.id, 
          amount: selectedAmount, 
          currency: data.currency,
          id: uuidv1,
        })
      } else {
        console.log('Please select an amount to donate');
      }
    }

    handlePaymentValueChange = (event) => {
      debugger
      this.setState({
        selectedAmount: parseInt(event.target.value),
      })
    }

    render() {
      const { data, visible, paymentStatus } = this.props;
      const { paymentInProgress, selectedAmount } = this.state;

      if (!visible) {
        return null;
      }

      const payments = [10, 20, 50, 100, 500].map((amount, j) => (
        <label key={j}>
          <input
            type="radio"
            name="payment"
            value={amount}
            checked={this.state.selectedAmount === amount}
            onChange={this.handlePaymentValueChange}
          /> {amount}
        </label>
      ));

      if (paymentInProgress) {
        if (paymentStatus.loading) {
          return (
            <Mask>
              <PaymentInProgress>
                <img src={loaderImage} width={30} height={30} />
                <GenericMessage 
                  message={'Processing Payment...'}
                  type={'inProgress'}
                />
              </PaymentInProgress>
            </Mask>
          )
        } 
        
        if (paymentStatus.error) {
          return (
            <Mask>
              <GenericMessage 
                message={'Something went wrong. Please try again!'}
                type={'error'}
              />
            </Mask>
          )
        }

        if (paymentStatus.data) {
          return (
            <Mask>
              <GenericMessage 
                message={`Thanks for donating ${selectedAmount}`}
                type={'success'}
              />
            </Mask>
          )
        }

        return null;
      }

      return (
        <Mask>
          <ClosePaymentButton onClick={this.handleCloseButton}>X</ClosePaymentButton>
          <div>{`Select the amount to donate (${data.currency})`}</div>
          <PaymentOptionHolder>
            {payments}
          </PaymentOptionHolder>
          <div onClick={this.initiatePayment}>
            <ButtonPrimary displayText={'Pay'} />
          </div>
        </Mask>
      )
    }
};

const mapStateToProps = state => {
  return {
    paymentStatus: state.donations.paymentStatus,
  };
};
    
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      makePayment,
      clearPaymentInProgressData,
    },
    dispatch
  );
    
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PaymentMask)
);


