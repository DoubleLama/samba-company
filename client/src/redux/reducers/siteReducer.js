import * as types from '../actions/types'

const initialState = []

const storeSite = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SITES:
      return {
        ...state,
        sites: action.payload,
      }

    case types.REMOVE_ALL:
      return { ...state, sites: [] }

    default:
      return state
  }
}

export default storeSite
