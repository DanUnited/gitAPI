import {FETCH_REPOSITORIES_SUCCESS} from './constants'
import {IAppStore} from './types'
import {Reducer} from 'redux'

const initialState: IAppStore = {
  repositories: [],
}

const reducer: Reducer<IAppStore> = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_REPOSITORIES_SUCCESS: {
      return {...state, repositories: payload}
    }
  }

  return state
}

export default reducer
