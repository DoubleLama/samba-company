import * as types from '../actions/types'

const initialState = []

const storeCreation = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CREATIONS:
      return {
        ...state,
        creations: action.payload,
      }

    default:
      return state
  }
}

export default storeCreation
