import * as types from './types'
import api from '../../api'

export const getSites = () => async (dispatch) => {
  await api
    .get(`api/v1/websites`)
    .then((response) => {
      dispatch({ type: types.GET_SITES, payload: response.data })
    })
    .catch((error) => {
      console.error(error)
      return false
    })
}

export const removeSites = () => async (dispatch) => {
  dispatch({ type: types.GET_SITES })
}
