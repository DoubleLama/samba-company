import * as types from './types'
import api from '../../api'

const getCreations = () => async (dispatch) => {
  await api
    .get(`api/v1/creations`)
    .then((response) => {
      dispatch({ type: types.GET_CREATIONS, payload: response.data })
    })
    .catch((error) => {
      console.error(error)
      return false
    })
}

export default getCreations
