// @flow

// Necessary Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

// Styled components 
// Reference - https://github.com/styled-components/styled-components
import styled, { keyframes } from 'styled-components';

// ActionCreators imports
import { makePayment, clearPaymentInProgressData } from '../../store/actions/donations';

// import loadable from '@loadable/component';
// const loaderImage = loadable(() => import('../../images/loader.gif'));
// const ButtonPrimary = loadable(() => import('../ButtonPrimary/index.js'));
// const GenericMessage = loadable(() => import('../GenericMessage/index.js'));

// Importing other components
import ButtonPrimary from '../ButtonPrimary';
import GenericMessage from '../GenericMessage';
import loaderImage from '../../images/loader.gif';

// Using Keyframes for animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled Components
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
  animation: 0.3s ${fadeIn} ease-in;

  & >p{
    font-size: 16px;
    color: #5c606f;
  }

  & >div{
    padding: 5px;
  }
`;

// Styled Components
const PaymentOptionHolder = styled.div`
  display: flex;

  & >label{
    display: flex;
    padding: 5px;
    color: #5c606f;
  }
`;

// Styled Components
const ClosePaymentButton = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

// Styled Components
const PaymentHelpers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
`;

// Styled Components
const ErrorHolder = styled.div`
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  margin: 0px auto;
  animation: 0.3s ${fadeIn} ease-in;
`;

class PaymentMask extends Component {

  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      selectedAmount: null,
      paymentInProgress: false,
      showError: false,
    }
  }

  // Resets payment data when the paymentStatus.loading prop changes from true to false
  componentDidUpdate = prevProps => {
    if (prevProps.paymentStatus.loading === true && this.props.paymentStatus.loading === false) {
      setTimeout(() => {
        this.clearPaymentData();
      }, 2000);
    }
  }

  // Function to trigger close and reset of payment data
  clearPaymentData = () => {
    this.handleCloseButton();
    const { clearPaymentInProgressData } = this.props;
    clearPaymentInProgressData();
    this.resetPaymentForm();
  }

  // Actual function to clear form data
  resetPaymentForm = () => {
    this.setState({
      selectedAmount: null,
      paymentInProgress: false,
      showError: false,
    })
  }

  // Function to handle close button click
  handleCloseButton = () => {
    this.resetPaymentForm();
    const { handleCloseButtonClick } = this.props;
    handleCloseButtonClick();
  }

  // Function to initiate Payment API call if payment amount is selected
  // if nothing is selected - show appropriate error message
  initiatePayment = () => {
    const { makePayment, data } = this.props;
    const { selectedAmount } = this.state;
    const uuidv1 = require('uuid/v1');
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
      this.setState({
        showError: true,
      })
    }
  }

  // Update the selected payment amount on radio button selection
  handlePaymentValueChange = (event) => {
    this.setState({
      selectedAmount: parseInt(event.target.value),
      showError: false,
    })
  }

  render() {
    const { data, visible, paymentStatus } = this.props;
    const { paymentInProgress, selectedAmount, showError } = this.state;

    // return null if visible is false
    if (!visible) {
      return null;
    }

    // map through the available payments options for donation
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

    // Only show this section when payment is in progress
    // hides the payment options screen
    if (paymentInProgress) {
      // show loading if loading status is true
      if (paymentStatus.loading) {
        return (
          <Mask>
            <PaymentHelpers>
              <img src={loaderImage} width={30} height={30} />
              <GenericMessage 
                message={'Processing Payment...'}
                type={'inProgress'}
              />
            </PaymentHelpers>
          </Mask>
        )
      } 
        
      // show error if error status thrown
      if (paymentStatus.error) {
        return (
          <Mask>
            <PaymentHelpers>
              <GenericMessage 
                message={'Something went wrong. Please try again!'}
                type={'error'}
              />
            </PaymentHelpers>
          </Mask>
        )
      }

      // Show thanks message when payment successful
      if (paymentStatus.data) {
        return (
          <Mask>
            <PaymentHelpers>
              <GenericMessage 
                message={`Thanks for donating ${selectedAmount} ${data.currency}`}
                type={'success'}
              />
            </PaymentHelpers>
          </Mask>
        )
      }

      return null;
    }

    // Payment options holder
    return (
      <Mask>
        <ClosePaymentButton onClick={this.handleCloseButton}>X</ClosePaymentButton>
        <p>{`Select the amount to donate (${data.currency})`}</p>
        <PaymentOptionHolder>
          {payments}
        </PaymentOptionHolder>
        <div onClick={this.initiatePayment}>
          <ButtonPrimary displayText={'Pay'} />
        </div>
        {showError && 
            <ErrorHolder>
              <GenericMessage message={'Please select an amount to donate first.'} type={'error'} />
            </ErrorHolder>
        }
      </Mask>
    )
  }
};

// Proptype Validations
PaymentMask.propTypes = {
  makePayment: PropTypes.func.isRequired,
  clearPaymentInProgressData: PropTypes.func.isRequired,
  paymentStatus: PropTypes.object.isRequired,
  data: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }), 
  visible: PropTypes.bool,
  handleCloseButtonClick: PropTypes.func.isRequired,
};

// default props
PaymentMask.defaultProps = {
  visible: false,
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


