import * as types from '../constants/actionType'

const initialState = {
  auth: JSON.parse(localStorage.getItem('user')) ? true : false,
  user: {}
}

const authLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        auth: JSON.parse(localStorage.getItem('user')) ? true : false,
          user: action.user
      };

    default:
      return state;
  }
}

export default authLoginReducer