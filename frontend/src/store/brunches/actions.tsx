import {
  FETCH_REPOS_BRUNCHES,
  FETCH_REPOS_BRUNCHES_FAIL,
  FETCH_REPOS_BRUNCHES_SUCCESS,
} from './constants'

export const fetchBrunches = (q?: string) => ({type: FETCH_REPOS_BRUNCHES, payload: q})
export const fetchBrunchesSuccess = (data?: string) => ({type: FETCH_REPOS_BRUNCHES_SUCCESS, payload: data})
export const fetchBrunchesFail = () => ({type: FETCH_REPOS_BRUNCHES_FAIL})


