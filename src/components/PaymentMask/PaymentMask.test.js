import React from 'react'
import renderer from 'react-test-renderer'
import Paymentmask from './index.js'

it('Paymentmask: default', () => {
  const component = renderer.create(<Paymentmask />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})