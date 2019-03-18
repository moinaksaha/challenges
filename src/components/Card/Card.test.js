import React from 'react'
import Card from './';
import ButtonPrimary from '../ButtonPrimary';
import PaymentMask from '../PaymentMask';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { mountWrap, shallowWrap } from '../../utils/testUtils';

import sinon from 'sinon';

describe('Component: <Card />', () => {

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<Card />)
    expect(toJson(tree)).toMatchSnapshot()
  })

  test('Render Status: Success', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.exists()).toBe(true);
  })
  
  const mockData = {
    currency:'THB',
    id:1,
    image:'baan-kru-noi.jpg',
    name: 'Baan Kru Noi',
  }

  const mockDonations = [
    {
      charitiesId: 1,
      amount: 20,
      currency: 'THB',
      id: 2,
    },
  ]

  test('Snapshot[With Mock Data]: Enzyme', () => {
    const wrapper = shallow(<Card data={mockData} donations={mockDonations}/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('Checking Initial state of the component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.state().showPaymentButton).toBe(false);
  })

  test('Initial State', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.state().showPaymentButton).toBe(false);
  })

  test('Testing children: PaymentMask', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(PaymentMask).length).toEqual(1);
  })

  test('Testing children: ButtonPrimary', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(ButtonPrimary).length).toEqual(1);
  })

  test('State changes -> showPaymentButton: true -> on clicking show button', () => {
    const wrapper = shallow(<Card />);
    wrapper.find('#showPaymentScreenButton').simulate('click');
    expect(wrapper.state().showPaymentButton).toBe(true);
  })

  test('Passes new value of visible Prop to PaymentMask component on button click', () => {
    const wrappedMount = () => shallowWrap(<Card />);
    const wrapper = wrappedMount();
    wrapper.find('#showPaymentScreenButton').simulate('click');
    expect(wrapper.find(PaymentMask).prop('visible')).toEqual(wrapper.state().showPaymentButton);
  });

  test('Passes down correct data prop to PaymentMask component', () => {
    const wrappedMount = () => shallowWrap(<Card data={mockData} />);
    const wrapper = wrappedMount();
    expect(wrapper.find(PaymentMask).prop('data')).toEqual(mockData);
  });

  // test()

  // test('calls componentDidMount', () => {
  //   const spy = sinon.spy(Card.prototype, 'componentDidMount');

  //   const wrappedMount = () => shallowWrap(<Card data={mockData} componentDidMount={spy} />);
  //   const wrapper = wrappedMount();

  //   // const wrapper = mount(<Card componentDidMount={spy} />);
  //   expect(spy.calledOnce).to.equal(true);
  //   // Clean up
  //   spy.restore();
  // });

})