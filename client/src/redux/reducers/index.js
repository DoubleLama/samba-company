import { combineReducers } from 'redux'
import maintenanceReducer from './maintenanceReducer'
import creationReducer from './creationReducer'
import siteReducer from './siteReducer'

export default combineReducers({
  scSites: siteReducer,
  scCreations: creationReducer,
  scMaintenances: maintenanceReducer,
})
