import {
  FETCH_REPOSITORIES_SUCCESS,
  CLEAR_REPOSITORIES,
  SEARCH,
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_FAIL,
} from './constants'
import {IRepositoriesStore} from './types'
import {Reducer} from 'redux'

const initialState: IRepositoriesStore = {
  items: [],
  load: false,
  search: '',
}

const reducer: Reducer<IRepositoriesStore> = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_REPOSITORIES: {
      return {...state, load: true}
    }
    case FETCH_REPOSITORIES_SUCCESS: {
      return {...state, items: payload, load: false}
    }
    case CLEAR_REPOSITORIES: {
      return {...state, items: []}
    }
    case FETCH_REPOSITORIES_FAIL: {
      return {...state, load: false}
    }
    case SEARCH: {
      return {...state, search: payload}
    }
  }

  return state
}

export default reducer
