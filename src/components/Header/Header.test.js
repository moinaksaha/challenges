import React from 'react'
import Header from './index.js'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Component: <Header />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<Header />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})