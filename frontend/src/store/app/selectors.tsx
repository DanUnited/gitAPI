import {IStore} from 'store'
import {IAppStore} from './types'

const local = (state: IStore): IAppStore => state.app

export const getRepositories = (state: IStore) => local(state).repositories
