import React from 'react'
import { shallow } from 'enzyme';
import Genericnodata from './index.js'
import toJson from 'enzyme-to-json';

describe('Component: <Genericnodata />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<Genericnodata />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<Genericnodata />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})