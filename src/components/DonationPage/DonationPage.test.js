import React from 'react'
import DonationPage from './index.js'
// import Card from '../Card'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import { BrowserRouter as Router } from 'react-router-dom';
// import sinon from 'sinon';

// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';

describe('Component: <DonationPage />', () => {
  
  test('Render Status: Success', () => {
    const wrapper = shallow(<DonationPage />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<DonationPage />)
    expect(toJson(tree)).toMatchSnapshot()
  })


  // const mockCharities = {
  //   data: [
  //     {
  //       id: 1,
  //       name: 'Baan Kru Noi',
  //       image: 'baan-kru-noi.jpg',
  //       currency: 'THB',
  //     },
  //     {
  //       id: 2,
  //       name: 'Habitat for Humanity Thailand',
  //       image: 'habitat-for-humanity-thailand.jpg',
  //       currency: 'THB',
  //     },
  //     {
  //       id: 3,
  //       name: 'Paper Ranger',
  //       image: 'paper-ranger.jpg',
  //       currency: 'THB',
  //     },
  //     {
  //       id: 4,
  //       name: 'Makhampom Theater',
  //       image: 'makhampom-theater.jpg',
  //       currency: 'THB',
  //     },
  //     {
  //       id: 5,
  //       name: 'Thailand Association of the Blind',
  //       image: 'thailand-association-of-the-blind.jpg',
  //       currency: 'THB',
  //     },
  //   ],
  //   loading: false,
  //   error: null,
  // }

  // test('Calls componentWillReceiveProps', () => {
  //   // const spy = sinon.spy(DonationPage.prototype, 'componentWillReceiveProps');
  //   const mockStore = configureMockStore();
  //   const store = mockStore({});

  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <Router>
  //         <DonationPage allCharities={mockCharities} />
  //       </Router>
  //     </Provider>);
  //   // const wrapper = mount(<DonationPage allCharities={mockCharities} />);

  //   expect(wrapper.prop('allCharities')).toEqual(mockCharities)
  //   // expect(spy).to.have.property('callCount', 0);
  //   // wrapper.setProps({ allCharities: mockCharities });
  //   // expect(spy).to.have.property('callCount', 1);
  // })

  

  // // const initialState = {
  // //   charities: {
  // //     loading: false,
  // //     data: null,
  // //     error: null,
  // //   },
  // // }
  
  // const initialState = {
  //   fetchAllDonations() {},
  //   fetchAllCharities() {},
  //   charities: {
  //     loading: false,
  //     data: null,
  //     error: null,
  //   },
  //   donations: [],
  // }

  // test('Renders 5 instances of card for the given mock data', () => {
  //   const mockStore = configureMockStore();
  //   const store = mockStore(initialState);

  //   const wrapper = shallow(
  //     <Provider store={store}>
  //       <Router>
  //         <DonationPage />
  //       </Router>
  //     </Provider>);
  //   wrapper.setProps({ allCharities: mockCharities });
  //   expect(wrapper.find(Card)).to.have.lengthOf(5);
  // })
  
})