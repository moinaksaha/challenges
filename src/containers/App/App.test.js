import React from 'react'
import renderer from 'react-test-renderer'
import App from './index.js'

it('App: default', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})