---
to: src/components/<%= name %>/<%= name %>.test.js
---
<% const comp = h.inflection.undasherize(name) %>import React from 'react'
import { shallow } from 'enzyme';
import <%= comp %> from './index.js'
import toJson from 'enzyme-to-json';

describe('Component: <<%= comp %> />', () => {

  test('Render Status: Success', () => {
    const wrapper = shallow(<<%= comp %> />);
    expect(wrapper.exists()).toBe(true);
  })

  test('Snapshot: Enzyme', () => {
    const tree = shallow(<<%= comp %> />)
    expect(toJson(tree)).toMatchSnapshot()
  })
  
})