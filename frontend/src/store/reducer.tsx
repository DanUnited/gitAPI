import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import repositoriesReducer from 'store/repositories/reducer'
import brunchesReducer from 'store/brunches/reducer'

export default history => combineReducers({
  router: connectRouter(history),
  repositories: repositoriesReducer,
  brunches: brunchesReducer,
})
