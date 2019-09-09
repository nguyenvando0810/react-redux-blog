import * as types from '../constants/actionType'

const initialState = []

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST:
      return action.products
    default:
      return [...state]
  }
}

export default productsReducer