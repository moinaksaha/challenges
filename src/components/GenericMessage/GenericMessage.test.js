import React from 'react'
import renderer from 'react-test-renderer'
import Genericmessage from './index.js'

it('Genericmessage: default', () => {
  const component = renderer.create(<Genericmessage />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})