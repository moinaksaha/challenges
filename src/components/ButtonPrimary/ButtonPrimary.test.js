import React from 'react'
import renderer from 'react-test-renderer'
import Buttonprimary from './index.js'

it('Buttonprimary: default', () => {
  const component = renderer.create(<Buttonprimary />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})