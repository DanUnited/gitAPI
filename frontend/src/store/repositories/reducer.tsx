import {FETCH_REPOSITORIES_SUCCESS, CLEAR_REPOSITORIES, SEARCH} from './constants'
import {IRepositoriesStore} from './types'
import {Reducer} from 'redux'

const initialState: IRepositoriesStore = {
  items: [],
  search: '',
}

const reducer: Reducer<IRepositoriesStore> = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_REPOSITORIES_SUCCESS: {
      return {...state, items: payload}
    }
    case CLEAR_REPOSITORIES: {
      return {...state, items: []}
    }

    case SEARCH: {
      return {...state, search: payload}
    }
  }

  return state
}

export default reducer
