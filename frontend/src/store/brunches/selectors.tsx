import {IStore} from 'store'
import {IBrunchesStore} from './types'

const local = (state: IStore): IBrunchesStore => state.brunches

export const getBrunches = (state: IStore) => local(state).items
export const isLoading = (state: IStore) => local(state).load
