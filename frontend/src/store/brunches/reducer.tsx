import {FETCH_REPOS_BRUNCHES_SUCCESS, FETCH_REPOS_BRUNCHES, FETCH_REPOS_BRUNCHES_FAIL} from './constants'
import {IBrunchesStore} from './types'
import {Reducer} from 'redux'

const initialState: IBrunchesStore = {
  items: [],
  load: false,
}

const reducer: Reducer<IBrunchesStore> = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_REPOS_BRUNCHES: {
      return {...state, load: true}
    }

    case FETCH_REPOS_BRUNCHES_SUCCESS: {
      return {...state, items: payload, load: false}
    }

    case FETCH_REPOS_BRUNCHES_FAIL: {
      return {...state, load: false}
    }
  }

  return state
}

export default reducer
