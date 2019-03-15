import React from 'react'
import renderer from 'react-test-renderer'
import Donationpage from './index.js'

it('Donationpage: default', () => {
  const component = renderer.create(<Donationpage />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})