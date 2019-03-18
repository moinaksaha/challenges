import React from 'react'
import App from './index.js'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Component: <App />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})