import React from 'react'
import { shallow } from 'enzyme';
import Genericerror from './index.js'
import toJson from 'enzyme-to-json';

describe('Component: <Genericerror />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<Genericerror />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<Genericerror />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})