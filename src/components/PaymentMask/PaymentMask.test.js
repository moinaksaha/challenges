import React from 'react'
import PaymentMask from './'
// import ButtonPrimary from '../ButtonPrimary';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';

describe('Component: <PaymentMask />', () => {

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<PaymentMask />)
    expect(toJson(tree)).toMatchSnapshot()
  })

  test('Render Status: Success', () => {
    const wrapper = shallow(<PaymentMask />);
    expect(wrapper.exists()).toBe(true);
  })

  // test('Initial State', () => {
  //   const mockStore = configureMockStore();
  //   const store = mockStore({});

  //   const wrapper = mount(
  //     <Provider store={store}>
  //       <Router>
  //         <PaymentMask />
  //       </Router>
  //     </Provider>).dive();
  //   // const wrapper = shallow(<PaymentMask />).dive();
  //   expect(wrapper.state().selectedAmount).toBe(null);
  //   expect(wrapper.state().showError).toBe(false);
  //   expect(wrapper.state().paymentInProgress).toBe(false);
  // })

  
  
})