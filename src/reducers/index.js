import { combineReducers } from 'redux'
import products from './products'
import authLogin from './authLogin'

const reducer = combineReducers({
  products,
  authLogin
})

export default reducer