import { combineReducers } from 'redux'
import donations from './donations'
import charities from './charities'

export default combineReducers({
  charities,
  donations,
})