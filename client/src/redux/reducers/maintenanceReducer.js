import * as types from '../actions/types'

const initialState = []

const storeMaintenance = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MAINTENANCES:
      return {
        ...state,
        maintenances: action.payload,
      }

    default:
      return state
  }
}

export default storeMaintenance
