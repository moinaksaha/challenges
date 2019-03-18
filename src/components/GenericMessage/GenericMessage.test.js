import React from 'react'
import GenericMessage from './index.js'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Component: <GenericMessage />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<GenericMessage />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<GenericMessage />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})