import React from 'react'
import { shallow } from 'enzyme';
import Genericloader from './index.js'
import toJson from 'enzyme-to-json';

describe('Component: <Genericloader />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<Genericloader />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<Genericloader />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})