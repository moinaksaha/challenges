import React from 'react'
import ButtonPrimary from './index.js'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Component: <ButtonPrimary />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<ButtonPrimary />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<ButtonPrimary displayText={'Button Test'} />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})