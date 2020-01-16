import {IStore} from 'store'
import {IRepositoriesStore} from './types'

const local = (state: IStore): IRepositoriesStore => state.repositories

export const getRepositories = (state: IStore) => local(state).items

export const getSearchValue = (state: IStore) => local(state).search
