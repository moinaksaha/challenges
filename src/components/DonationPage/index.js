// @flow
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
// import styles from './index.module.css'

import { fetchAllCharities } from '../../store/actions/charities';

import Card from '../Card';

export class Donationpage extends Component {
  componentDidMount = () => {
    const { fetchAllCharities } = this.props;
    fetchAllCharities();
  }
  render() {
    const { allCharities } = this.props;

    if (allCharities.loading) {
      return <div>loading</div>;
    }

    if (allCharities.error) {
      return <div>Error while loading</div>
    }
    if (!allCharities || !allCharities.data || allCharities.data.length === 0) {
      return <div>No data to show</div>
    }
    return (
      <div>
        {allCharities.data.map((item) => {
          return (
            <Card 
              key={item.id}
              data={item}
            />
          )
        })}
      </div>
    );
  }
};

// export default Donationpage

const mapStateToProps = state => {
  return {
    allCharities: state.charities.charities,
  };
};
    
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllCharities,
    },
    dispatch
  );
    
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Donationpage)
);


