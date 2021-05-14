import * as types from './types'
import api from '../../api'

const getMaintenances = () => async (dispatch) => {
  await api
    .get(`api/v1/maintenances`)
    .then((response) => {
      dispatch({ type: types.GET_MAINTENANCES, payload: response.data })
    })
    .catch((error) => {
      console.error(error)
      return false
    })
}

export default getMaintenances
