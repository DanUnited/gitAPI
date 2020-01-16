import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_FAIL,
  FETCH_REPOSITORIES_SUCCESS,
  SET_ACTIVE_REPOSITORY,
  CLEAR_REPOSITORIES,
  SEARCH,
} from './constants'

export const fetchRepositories = (q?: string) => ({type: FETCH_REPOSITORIES, payload: q})
export const fetchRepositoriesSuccess = (data?: string) => ({type: FETCH_REPOSITORIES_SUCCESS, payload: data})
export const fetchRepositoriesFail = () => ({type: FETCH_REPOSITORIES_FAIL})

export const setActiveRepository = (params: {
  author: string,
  repo: string,
}) => ({type: SET_ACTIVE_REPOSITORY})

export const clearRepositories = () => ({type: CLEAR_REPOSITORIES})

export const search = (val: string) => ({type: SEARCH, payload: val})
