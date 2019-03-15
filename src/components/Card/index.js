// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
// import styles from './index.module.css'

const CardWrapper = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
`;


class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <CardWrapper>
        <div>{`Background Image: ${data.image}`}</div>
        <div>{`Name: ${data.name}`}</div>
        <div>{`ID: ${data.id}`}</div>
        <div>{`Currency: ${data.currency}`}</div>
      </CardWrapper>
    );
  }
};

export default Card


