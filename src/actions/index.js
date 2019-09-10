import * as types from '../constants/actionType'
import callApi from '../utils/callApi'

export const getProducts = (products) => {
  return {
    type: types.GET_LIST,
    products
  }
}

export const getProductsRequest = () => {
  return (dispatch) => {
    return callApi('products', 'GET', null).then(res => {
      dispatch(getProducts(res.data))
    })
  }
}

export const login = (user) => {
  return {
    type: types.LOGIN,
    user
  }
}