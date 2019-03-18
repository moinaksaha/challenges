// Necessary Imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styled components Imports
// Reference - https://github.com/styled-components/styled-components
import styled from 'styled-components';

// Helper functions 
import { sumIndividualDonations } from '../../utils/helpers';

// Importing other components
import PaymentMask from '../PaymentMask';
import ButtonPrimary from '../ButtonPrimary';

// import loadable from '@loadable/component';
// const PaymentMask = loadable(() => import('../PaymentMask'));
// const ButtonPrimary = loadable(() => import('../ButtonPrimary'));

// Styled Components
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

// Styled Components
const CardWrapper = styled.div`
  flex: 0 50%;

  @media (max-width: 767px) {
    flex: 0 100%;
  }
`;

// Styled Components
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

// Styled Components
const TitleBar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    padding: 15px;
  }
`;

// Styled Components
const CharityName = styled.div`
  color: #5c606f;
  font-weight: 500;
`;

// Styled Components
const PreviousDonationBreakdown = styled.div`
  font-size: 10px;
  padding: 5px 0;
  color: #648cf3;
`;

class Card extends Component {

  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      showPaymentButton: false,
    }
  }

  // Function to change state for payment screen to be visible
  showPaymentScreen = () => {
    this.setState({
      showPaymentButton: true,
    })
  }

  // Function to hide Payment screen 
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
            <div id='showPaymentScreenButton' onClick={this.showPaymentScreen}>
              <ButtonPrimary displayText={'Donate'} key={'donatebutton'}/>
            </div>
          </TitleBar>
        </Container>
      </CardWrapper>
    );
  }
};

// Proptype Validations
Card.propTypes = {
  data: PropTypes.object,
  donations: PropTypes.array,
};

// Default props
Card.defaultProps = {
  data: {
    currency:'NA',
    id:0,
    image: undefined,
    name:'Donate',
  },
  donations: [],
};

export default Card;

