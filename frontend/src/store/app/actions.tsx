import {
    FETCH_REPOSITORIES,
    FETCH_REPOSITORIES_FAIL,
    FETCH_REPOSITORIES_SUCCESS
} from './constants'

export const fetchRepositories = (q?: string) => ({type: FETCH_REPOSITORIES, payload: q})
export const fetchRepositoruesSuccess = (data?: string) => ({type: FETCH_REPOSITORIES_SUCCESS, payload: data})
export const fetchRepositoruesFail = () => ({type: FETCH_REPOSITORIES_FAIL})

