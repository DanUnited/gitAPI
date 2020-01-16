import {createStore, applyMiddleware, Store} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createHashHistory} from 'history'
import {routerMiddleware, RouterState} from 'connected-react-router'

import saga from './saga'
import createRootReducer from './reducer'

import {IAppStore} from 'store/app/types'

export interface IStore {
  app: IAppStore,
  router: RouterState,
}

type createStoreType = () => Store<IStore>

const history = createHashHistory()

export {history}

let _storeInstance = null

const store: createStoreType = () => {
  if (_storeInstance) return _storeInstance
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  )

  sagaMiddleware.run(saga)

  _storeInstance = store
  return _storeInstance
}

export default store

export const dispatchAction = action => store().dispatch(action)
