import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import appReducer from 'store/app/reducer'

export default history => combineReducers({
  router: connectRouter(history),
  app: appReducer,
})
